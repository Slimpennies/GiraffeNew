"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6669],{6669:function(e,t,i){i.r(t),i.d(t,{walletConnect:function(){return W}});var a=i(43290),s=i(42009),n=i(87039),o=i(90038),r=i(46973);i(65007),i(35124);var h=new WeakMap,c=new WeakMap,l=new WeakMap,b=new WeakMap,d=new WeakMap,w=new WeakMap,p=new WeakMap,u=new WeakMap,_=new WeakSet,v=new WeakSet;class f extends r.a{get walletName(){return"WalletConnect"}constructor(e){super(e?.walletId||f.id,e),(0,a._)(this,v),(0,a._)(this,_),(0,n._)(this,h,{writable:!0,value:void 0}),(0,n._)(this,c,{writable:!0,value:void 0}),(0,s._)(this,"connector",void 0),(0,s._)(this,"projectId",void 0),(0,s._)(this,"qrcode",void 0),(0,n._)(this,l,{writable:!0,value:e=>{if(e)throw e}}),(0,n._)(this,b,{writable:!0,value:e=>{if((0,n.a)(this,c,e.provider),!(0,n.b)(this,c))throw Error("WalletConnect provider not found after connecting.")}}),(0,n._)(this,d,{writable:!0,value:()=>{(0,a.a)(this,v,k).call(this)}}),(0,n._)(this,w,{writable:!0,value:async e=>{e.chain||e.account}}),(0,n._)(this,p,{writable:!0,value:e=>{"display_uri"===e.type&&this.emit("open_wallet",e.data)}}),(0,n._)(this,u,{writable:!0,value:()=>{this.emit("open_wallet")}}),this.projectId=e?.projectId||"145769e410f16970a79ff77b2d89a1e0",this.qrcode=e?.qrcode!==!1}async getConnector(){if(!this.connector){let{WalletConnectConnector:e}=await i.e(6044).then(i.bind(i,76044));(0,n.a)(this,h,new e({chains:this.chains,options:{qrcode:this.qrcode,projectId:this.projectId,dappMetadata:this.dappMetadata,storage:this.walletStorage}})),this.connector=new o.W((0,n.b)(this,h)),(0,n.a)(this,c,await (0,n.b)(this,h).getProvider()),(0,a.a)(this,_,m).call(this)}return this.connector}}function m(){(0,n.b)(this,h)&&((0,a.a)(this,v,k).call(this),(0,n.b)(this,h).on("connect",(0,n.b)(this,b)),(0,n.b)(this,h).on("disconnect",(0,n.b)(this,d)),(0,n.b)(this,h).on("change",(0,n.b)(this,w)),(0,n.b)(this,h).on("message",(0,n.b)(this,p)),n.b(this,c)?.signer.client.on("session_request_sent",(0,n.b)(this,u)))}function k(){(0,n.b)(this,h)&&((0,n.b)(this,h).removeListener("connect",(0,n.b)(this,b)),(0,n.b)(this,h).removeListener("disconnect",(0,n.b)(this,d)),(0,n.b)(this,h).removeListener("change",(0,n.b)(this,w)),(0,n.b)(this,h).removeListener("message",(0,n.b)(this,p)),n.b(this,c)?.signer.client.removeListener("session_request_sent",(0,n.b)(this,u)))}(0,s._)(f,"id","walletConnect"),(0,s._)(f,"meta",{name:"WalletConnect",iconURL:"ipfs://QmX58KPRaTC9JYZ7KriuBzeoEaV2P9eZcA3qbFnTHZazKw/wallet-connect.svg"});let W=e=>{let t=e?.projectId||"145769e410f16970a79ff77b2d89a1e0";return{id:f.id,meta:f.meta,create:e=>new f({...e,qrcode:!0,projectId:t})}}}}]);