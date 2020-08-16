class bannerPlay{
    constructor(banner){
        this.bannerNum = 0;         //  广告图的个数,从1开始
        this.whichOne = 1;          //  当前是第几个(从零开始），因为前后有两个多的，当前是第一张
        this.timerId = 0;           //  定时器
        this.bannerBox = null;
        this.bannerList = null;
        this.titleList = null; 
		this.marleft = "100%";
        this.init(banner); 
    }
    //  初始化函数
    init(banner){
        this.getData(banner);  
        this.copyPreLast();
        this.autoPlay(this.whichOne);
        // this.overOut();
        // this.lrToggle();
        // this.hoverChange();
    }

    //  获取数据,渲染页面
    getData(dataArr){   
        //  获取全局变量
        this.bannerNum = dataArr.length;   
        this.bannerBox = document.querySelector('.banner-show');    //  是个100%变量
        this.bannerList = document.querySelector('.banner-list');
        this.titleList = document.querySelector('.title-list');
		this.titleList.children[0].className = "active";
    }

    //  复制前后元素
    copyPreLast(){
        //  克隆第一张
        var previous = this.bannerList.querySelector('li:first-child');
        var preClone = previous.cloneNode(true);      
        //  克隆最后一张
        var last = this.bannerList.querySelector(' li:last-child');
        var lastClone = last.cloneNode(true);
        //  放到最前最后
        this.bannerList.appendChild(preClone);
        this.bannerList.insertBefore(lastClone,this.bannerList.firstElementChild);
		//  动态设置  ul   的宽度
        this.bannerList.style.width = parseInt(this.marleft) * this.bannerList.children.length + "%";
		for(var i = 0; i < this.bannerList.children.length; i++){
			this.bannerList.children[i].style.width = `calc(100%/${this.bannerList.children.length})`;
		}
        this.bannerList.style.marginLeft = `-${this.marleft}`;
    }

    // 设置自动轮播效果
    autoPlay(count){       
        var ol_li = this.titleList.querySelectorAll('li');
        this.timerId = setInterval(() => {
				
				
                //  自动向后轮播               
                this.bannerList.style.marginLeft = -parseInt(this.marleft)* (count + 1) + "%";
                this.bannerList.style.transition = "all 1s ease-out";
				
				
				
                //  随图片动态控制下方titleList中的样式
				
				
				for(var i = 0; i < ol_li.length; i++){
					ol_li[i].className = "";
				}
                //  当到了最后一张时会跳回到第一张，对应的ol下li为第0个
				// console.log(count);
				if(count == this.bannerNum + 1){
					
					this.bannerList.style.marginLeft = `-${this.marleft}`;
					this.bannerList.style.transition = "all 0s";
                    ol_li[0].className = "active";
					
					count = 1;
				}
				// else if(count == 4){
				// 	ol_li[0].className = "active";
				// 	// count = 0;
				// }else{
    //                 ol_li[count].className = "active";
    //             }
				//  图片已经切换到第五张了，随后ol也切换到第一张完毕，该将第五张移动到第一张了 此时count = 5
				
				// if(count == this.bannerNum +1){
				//     //  从后回滚到初始位置
				//     // this.bannerList.style.marginLeft = `-${this.marleft}`;
				// 	console.log("我进来了")
				    
				// 	// console.log("我出来了")
				// 	// console.log(this.bannerList)
				    
				// }
				// if(count == this.bannerNum){
				// 	console.log("我生效了")
					
				// }
                count++;  
				
                //  将停止时的图拿到全局
                this.whichOne = count; 
        },2000)
    }

    // 移入、移出时关闭、开启定时器
    overOut(){
        //  使用 enter  和  leave  阻止左右两个按钮冒泡
        this.bannerBox.addEventListener('mouseenter',() => clearInterval(this.timerId))
        this.bannerBox.addEventListener('mouseleave',() => this.autoPlay(this.whichOne))
    }

    // 左右按钮切换功能
    lrToggle(){
            var leftBtn = document.querySelector('.banner-show  > p:nth-of-type(1)');
            var rightBtn = document.querySelector('.banner-show  > p:nth-of-type(2)');
            //  左边按钮的切换事件
            leftBtn.onclick = () => { 
                //  banner图的转换             
                this.bannerList.style.transition = "all 1s ease-out";
                this.bannerList.style.marginLeft = (parseInt(this.bannerList.style.marginLeft) + this.bannerBox.offsetWidth)/100 + "rem";
                //  title的对应转换
                Array.from(this.titleList.children).forEach((item,index) =>{
                    Array.from(this.titleList.children)[index].className = "";
                })
                this.whichOne--;
                if(this.whichOne == 0){
                    this.titleList.children[this.bannerNum - 1].className = "active";
                }else{
                    this.titleList.children[this.whichOne - 1].className = "active";
                }
                //  当点击到前面的最后一张(第零张)跳转到后面的最后一张
                setTimeout(() => {
                    if(this.whichOne == 0){
                        this.bannerList.style.transition = "none";
                        this.bannerList.style.marginLeft = -this.bannerBox.offsetWidth * this.bannerNum/100 + "rem";
                        this.whichOne = this.bannerNum;    
                    } 
                },1000)         
            }  

            //  右边按钮的点击切换事件
            rightBtn.onclick = () =>{
                //  当点击到后面的第一张(第零张)跳转到前面的第一张
                setTimeout(() =>{
                    if(this.whichOne == this.bannerNum + 1){
                        this.bannerList.style.transition = "none";
                        this.bannerList.style.marginLeft = -this.bannerBox.offsetWidth/100 + "rem";
                        this.whichOne = 1;
                    }
                },1000)    
                this.bannerList.style.transition = "all 1s ease-out";
                this.bannerList.style.marginLeft = (parseInt(this.bannerList.style.marginLeft) - this.bannerBox.offsetWidth)/100 + "rem";
                //  title的对应转换
                Array.from(this.titleList.children).forEach((item,index) =>{
                    Array.from(this.titleList.children)[index].className = "";
                })
                this.whichOne++;
               
                if(this.whichOne == this.bannerNum + 1){
                    this.titleList.children[0].className = "active";
                }else{
                    this.titleList.children[this.whichOne - 1].className = "active";
                }                  
            }
    }

    //  滑过那个title，就让上面广告切换到哪一张
    hoverChange(){
        for(let i = 0; i< this.bannerNum; i++){
            this.titleList.children[i].addEventListener('mouseover',() =>{
                clearInterval(this.timerId);
                for(var j = 0; j < this.bannerNum; j++){
                    this.titleList.children[j].className = "";
                }
                this.bannerList.style.marginLeft = -this.bannerBox.offsetWidth * (i + 1)/100 + "rem";
                this.whichOne = i + 1;    //  让当前张数定位到滑过的这一张
            })
            this.titleList.children[i].addEventListener('mouseout',() =>{
                this.autoPlay(this.whichOne);
            })
        }
	}
	}
	
export default bannerPlay;