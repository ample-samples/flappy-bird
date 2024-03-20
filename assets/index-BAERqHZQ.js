var M=Object.defineProperty;var H=(A,e,i)=>e in A?M(A,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):A[e]=i;var t=(A,e,i)=>(H(A,typeof e!="symbol"?e+"":e,i),i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function i(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=i(s);fetch(s.href,o)}})();class F{constructor(e,i,n,s){t(this,"x");t(this,"y");t(this,"dx");t(this,"c");t(this,"width",100);t(this,"height",innerHeight);t(this,"xOffset");t(this,"initialdx");t(this,"pipeImg");t(this,"draw",()=>{this.c.beginPath(),this.c.fillStyle="#aaa",this.c.drawImage(this.pipeImg,this.x,this.y,this.width,this.height),this.c.drawImage(this.pipeImg,this.x,this.y-(innerHeight+200),this.width,this.height)});t(this,"update",()=>{this.x+=this.dx,this.draw()});t(this,"reset",()=>{this.x=innerWidth+this.width,this.y=innerHeight*(1+Math.random())/2-innerHeight/4+100});t(this,"restart",()=>{this.dx=this.initialdx,this.x=innerWidth+this.xOffset,this.y=innerHeight*(1+Math.random())/2-innerHeight/4+100,this.draw()});t(this,"stop",()=>{this.dx=0});this.x=innerWidth+n,this.y=innerHeight*(1+Math.random())/2-innerHeight/4+100,this.dx=i,this.c=e,this.xOffset=n,this.initialdx=i,this.pipeImg=s}}class S{constructor(e,i){t(this,"x");t(this,"y");t(this,"dy");t(this,"c");t(this,"width",100);t(this,"r",20);t(this,"grav",.02);t(this,"hasFallenOff");t(this,"image");t(this,"jumpEvent",e=>{if(e instanceof KeyboardEvent&&e.code==="ArrowUp"||e instanceof MouseEvent){this.dy=-2;const i=document.querySelector(".audio__jump");if(!i)throw new Error("Jump element not found");i.play()}});t(this,"draw",()=>{this.c.drawImage(this.image,this.x-this.width/4,this.y-this.width/4,this.width/2,this.width/2)});t(this,"update",()=>{this.dy+=this.grav,this.y+=this.dy,this.y>innerHeight-this.r&&(this.hasFallenOff=!0,this.stop()),this.draw()});t(this,"restart",()=>{this.grav=.02,this.y=innerHeight/2,this.hasFallenOff=!1,this.dy=0,this.draw(),this.c.canvas.addEventListener("keydown",this.jumpEvent),this.c.canvas.addEventListener("click",this.jumpEvent)});t(this,"stop",()=>{this.dy=0,this.grav=0,this.c.canvas.removeEventListener("keydown",this.jumpEvent),this.c.canvas.removeEventListener("click",this.jumpEvent)});this.x=100,this.y=innerHeight/2-200,this.c=e,this.dy=0,this.hasFallenOff=!1,this.image=i,this.c.canvas.addEventListener("keydown",this.jumpEvent),this.c.canvas.addEventListener("click",this.jumpEvent)}}class C{constructor(e){t(this,"isVisisble");t(this,"c");t(this,"restart",()=>{});t(this,"show",e=>{this.c.beginPath(),this.c.fillStyle="#0069AAaa",this.c.fillRect(innerWidth/2-100,innerHeight/2-50,200,210),this.c.font="30px Arial",this.c.fillStyle="#FFEB57",this.c.textAlign="center",this.c.fillText("Game Over",innerWidth/2,innerHeight/2),this.c.textAlign="center",this.c.fillText(`Score: ${e}`,innerWidth/2,innerHeight/2+50),this.c.fillText("Jump or",innerWidth/2,innerHeight/2+100),this.c.fillText("R To Restart",innerWidth/2,innerHeight/2+140)});this.isVisisble=!1,this.c=e}}class L{constructor(e,i,n,s){t(this,"c");t(this,"image");t(this,"dx");t(this,"initialdx");t(this,"x",0);t(this,"xoffset");t(this,"draw",()=>{this.c.drawImage(this.image,this.xoffset,0,innerHeight,innerHeight)});t(this,"update",()=>{});t(this,"restart",()=>{});t(this,"stop",()=>{});this.c=e,this.image=n,this.dx=i,this.initialdx=i,this.xoffset=s}}const j=(A,e)=>{const i={x:e.x,y:e.y,h:e.height,w:e.width},n={x:e.x,y:e.y-innerHeight-200,h:e.height,w:e.width},s=Math.abs(A.x-i.x-i.w/2),o=Math.abs(A.y-i.y-i.h/2),h=Math.abs(A.x-n.x-n.w/2),f=Math.abs(A.y-n.y-n.h/2);if(s>i.w/2+A.r&&h>n.w/2+A.r||o>i.h/2+A.r&&f>n.h/2+A.r)return!1;if(s<=i.w/2||o<=i.h/2)return!0;const l=s-i.w/2,m=o-i.h/2;if(l*l+m*m<=A.r*A.r||h<=n.w/2||f<=n.h/2)return!0;const E=h-n.w/2,v=f-n.h/2;return E*E+v*v<=A.r*A.r},k="iVBORw0KGgoAAAANSUhEUgAAACAAAAMgCAYAAABCkmBpAAABhGlDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9TpSKVDu2g0iFDdbKLijjWKhShQqgVWnUwufQLmrQkKS6OgmvBwY/FqoOLs64OroIg+AHi7OCk6CIl/i8ptIjx4Lgf7+497t4BQqvKNLMvAWi6ZWRSSTGXXxUDr/AjjBBGEJWZWZ+TpDQ8x9c9fHy9i/Ms73N/jiG1YDLAJxInWN2wiDeIZzatOud94ggryyrxOfGEQRckfuS64vIb55LDAs+MGNnMPHGEWCz1sNLDrGxoxNPEMVXTKV/Iuaxy3uKsVRusc0/+wmBBX1nmOs0oUljEEiSIUNBABVVYiNOqk2IiQ/tJD/+o45fIpZCrAkaOBdSgQXb84H/wu1uzODXpJgWTQP+LbX+MAYFdoN207e9j226fAP5n4Erv+mstYPaT9GZXix0BoW3g4rqrKXvA5Q4w/FSXDdmR/DSFYhF4P6NvygPhW2Bwze2ts4/TByBLXaVvgINDYLxE2ese7x7o7e3fM53+fgB+lXKr6KZqyAAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gDEw8gIw9wowMAAAKoSURBVHja7datTsNQFADgc0kTBBN4FKpqewVMBYr3AMtzYOE9phAze4WhpqbwFZsgWVJEVyij/Cz8FJLvqPvTnvu1t809aTAqqugxsoiIq9ujH0k+XZQREXFyfPjUbvoREZen9zVguiifBruStOfaiT6K+d160ypb7brfxF70HAAAAAAAvQNSRERfR/JyNkmp6QxGRZVf7P/KwvPrh1jOJulPbEHW7uTD7OtPtzn382G2VQM855/HQzegXa1sFyS7FCJ+QwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIB/Bci2B6aLMj4z9iOA+d362xJ35eoa630LUkTEYFRUfSy+nE1SGoyK6uzmIE6ODzsvmi7KF3O7fA/NK8+H2YvXnw/rnR+fr/yGAAAAAAB1PfDWQdQ19961r6Ns3VO+yjGOVaS+juImHgFw1mJ5VNXb5gAAAABJRU5ErkJggg==",D="iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAABg2lDQ1BJQ0MgcHJvZmlsZQAAKJF9kT1Iw0AcxV9btVIqDmYQcchQneziF45ahSJUCLVCqw4ml35Bk4YkxcVRcC04+LFYdXBx1tXBVRAEP0CcHZwUXaTE/yWFFjEeHPfj3b3H3Tsg2KgwzeqaBTTdNtPJhJjNrYrhV4QgIIIp9MjMMuYkKQXf8XWPAF/v4jzL/9yfo0/NWwwIiMSzzDBt4g3i6U3b4LxPLLCSrBKfE4+ZdEHiR64rHr9xLroc5JmCmUnPEwvEYrGDlQ5mJVMjniSOqZpO+cGsxyrnLc5apcZa9+QvjOb1lWWu0xxGEotYggQRCmooowIbcVp1UiykaT/h4x9y/RK5FHKVwcixgCo0yK4f/A9+d2sVJsa9pGgC6H5xnI8RILwLNOuO833sOM0TIPQMXOltf7UBzHySXm9rsSOgfxu4uG5ryh5wuQMMPhmyKbtSiGawUADez+ibcsDALRBZ83pr7eP0AchQV6kb4OAQGC1S9rrPu3s7e/v3TKu/H4O5cq3yLYNuAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH6AMUCjgHKnQl2QAAAkVJREFUeNrt3TEyBEEUgOGhHIBdQhFFIiGUKoHUAUSugMgBcAtyF1BSMkqVhCISsrjBSknmqXpaL/N96drZxa+nuk3PNg0AAADQFWO138DweHqYOsDCVO4N3L/V/QVsvVT9HYz7G+g2AQgAASAABIAA6JqJ6vP8aB4/t1L4HV61Pvp6mlsn6G22f3+D3ab159M/LLtOYARwCkAACAABIAAEgHWAr/PU3P/rX2+DefLGStUfQDTP7x08546/N5M6/qCZKbpOYARwCkAACAABIAAEQLfWAaJ5fm9nrew8/Oi8qfn6WbP92dbHnwbPqeffbBsBEAACQAAIAAEgAH5uHaD2G4jm+X99ncAIgAAQAAJAAAgAATBCxsLrATYr799/zO3fD9cJguNnXe4Pix5/9ezBvgAEgAAQAAJAAAiAb68DRF+QvT9AuI6QVXkdIprnLy6/p16+t9T+eHT/hej+AUYApwAEgAAQAAJAAFgH+Cx7v//0/fZrX/cfXS8QfO5gNE/Pyq4TGAGcAhAAAkAACAAB0CnF7w9QfF9B4ev6I5cnk62PZ68HuLsOjt+8p55vBHAKQAAIAAEgAARAp6Q/mz57vcB/l70/QLT//2J9fmgEQAAIAAEgAASAAPitdYDOrxMk9wVE+/eNAAgAASAABIAAEAB/aR0gvU5QWXZ/f+15vhEAASAABIAAEAACYJTWASLRde/Zz80b9dc3AiAABIAAEAACQAD8p3WA7P72SOn99dnXNwIgAASAABAAAkAAAAAAABTwAYHZiDMZCsD3AAAAAElFTkSuQmCC",Y="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",u=new Image;u.src="data:image/png;base64,"+k;const I=new Image;I.src="data:image/png;base64,"+D;const x=new Image;x.src="data:image/png;base64,"+Y;let r={score:0,gameOver:!1,restart:!1};const d=document.querySelector("canvas");if(!d)throw new Error("canvas not found");d.width=window.innerWidth;d.height=window.innerHeight;const a=d.getContext("2d");if(!a)throw new Error("Canvas context not found");const c=[],P=Math.floor(innerWidth/300),g=new S(a,I),B=new C(a),G=Math.ceil(innerWidth/innerHeight)+1,y=[];for(let A=0;A<G;A++)y.push(new L(a,-1,x,A*innerHeight));for(let A=0;A<=P;A++)c.push(new F(a,-1,300*(A+1)+innerWidth,u));window.addEventListener("keydown",A=>{A.code==="KeyR"&&(r={...r,restart:!0})});window.addEventListener("keydown",A=>{A.code==="ArrowUp"&&r.gameOver&&(r={...r,restart:!0})});window.addEventListener("click",()=>{r.gameOver&&(r={...r,restart:!0})});const w=document.querySelector(".audio__game-over");if(!w)throw new Error("Gameover element not found");const Q=document.querySelector(".audio__epic");if(!Q)throw new Error("Epic element not found");const O=document.querySelector(".audio__point");if(!O)throw new Error("Point element not found");const p=()=>{a.clearRect(0,0,innerWidth,innerHeight),y.forEach(A=>{A.draw()}),r.restart&&(r={...r,gameOver:!1,score:0},B.isVisisble=!1,g.restart(),c.forEach(A=>{A.restart()}),r={...r,restart:!1});for(let A=0;A<c.length;A++)c[A].update();g.update(),c.forEach(A=>{A.x<0-A.width&&(A.reset(),r.score++,O.play(),r.score!==0&&r.score%10===0&&Q.play()),j(g,A)&&(r.gameOver||w.play(),r={...r,gameOver:!0})}),g.hasFallenOff&&(r.gameOver||w.play(),r={...r,gameOver:!0}),r.gameOver&&(c.forEach(A=>{A.stop()}),g.stop(),B.show(r.score)),a.font="30px Arial",a.fillStyle="#FFEB57",a.textAlign="left",a.fillText("Score: "+r.score,0,30),requestAnimationFrame(p)};u.onload=()=>{requestAnimationFrame(p)};
