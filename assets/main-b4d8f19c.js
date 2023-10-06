(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();var p=function(){function r(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,t,a){return t&&r(e.prototype,t),a&&r(e,a),e}}();function v(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}var n={drag:1,gravity:0,lifespan:161,maxSpeed:100,maxParticles:500,particleColors:["242, 167, 30","241, 207, 160","211, 79, 39"],particlesPerPress:400,jitter:0,randomness:1,size:10,sizeRange:10,shrinkSpeed:.1},P=function(){function r(){v(this,r),this.particles=[]}return p(r,[{key:"addParticle",value:function(t){for(var a=0;a<t.numToAdd;a++)this.particles.push(new S(t));for(;this.particles.length>n.maxParticles;)this.removeParticle()}},{key:"removeParticle",value:function(){this.particles.shift()}},{key:"update",value:function(){for(var t=0;t<this.particles.length;t++)this.particles[t].lifespan>0&&this.particles[t].update()}},{key:"draw",value:function(){for(var t=0;t<this.particles.length;t++)this.particles[t].draw()}}]),r}(),S=function(){function r(e){v(this,r),this.lifespan=n.lifespan,this.color=n.particleColors[Math.floor(Math.random()*n.particleColors.length)],this.size=n.size,this.size+=Math.random()*n.sizeRange-n.sizeRange/2,this.x=e.x,this.y=e.y;var t=-e.leftSpread/(this.lifespan/10),a=e.rightSpread/(this.lifespan/10),i=-e.topSpread/(this.lifespan/10),s=e.bottomSpread/(this.lifespan/10),l=a-t,u=s-i,y=e.leftSpread/(e.leftSpread+e.rightSpread),w=e.topSpread/(e.topSpread+e.bottomSpread);this.velX=Math.random()*l-l*y,this.velY=Math.random()*u-u*w,this.xOff=Math.random()*6400,this.yOff=Math.random()*6400,this.opacity=1,this.gravity=n.gravity,this.drag=n.drag,this.drag=n.drag}return p(r,[{key:"update",value:function(){this.velY+=this.gravity;var t=noise.simplex2(this.xOff,0),a=noise.simplex2(this.yOff,0);this.velX+=t/(10/n.randomness),this.velY+=a/(10/n.randomness),this.xOff+=n.jitter,this.yOff+=n.jitter,this.velX*=this.drag,this.velY*=this.drag,this.x+=this.velX,this.y+=this.velY,this.opacity=this.lifespan/100,this.size-=n.shrinkSpeed,this.size=Math.max(0,this.size),this.lifespan-=1,(this.size<=.1||this.opacity<=.01)&&(this.lifespan=0)}},{key:"draw",value:function(){o.fillStyle="rgba("+this.color+", "+this.opacity+")",o.beginPath(),o.arc(this.x,this.y,this.size,0,Math.PI*2),o.closePath(),o.fill()}}]),r}();function g(){o.clearRect(0,0,h,f),c.update(),c.draw(),requestAnimationFrame(g)}function x(r,e,t){var a=document.querySelector(".dialog"),i=a.getBoundingClientRect();a.classList.remove("is-in"),c.addParticle({numToAdd:n.particlesPerPress,x:e,y:t,leftSpread:e-i.left,rightSpread:i.right-e,topSpread:t-i.top,bottomSpread:i.bottom-t})}var c=void 0,o=void 0,h=window.innerWidth,f=window.innerHeight;function m(){h=window.innerWidth,f=window.innerHeight,d.width=h,d.height=f}console.clear();var d=document.createElement("canvas");o=d.getContext("2d");$(".shaker").append(d);m();$(window).on("resize",m);$("button").on("click",function(r){var e=document.querySelector(".shaker");e.classList.add("is-shaking");var t=document.querySelector(".dialog");x(t,r.pageX,r.pageY),$(".dialog").hide(),$(".message").fadeIn(2e3),setTimeout(function(){$(t).css("z-index",1)},200)});$("#stamp-footer").on("click",function(r){var e=document.getElementById("part-one-message");e.scrollTop=0,$(".message").hide(),$(".dialog").show()});noise.seed(Math.floor(Math.random()*64e3));c=new P;g();
