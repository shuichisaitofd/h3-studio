(()=>{
const KEY='h3MobileLoraLibraryV1';
const extras=[
 {id:'veda-mystic-xxx-mmh3-v5',name:'MysticXXX MMH3 V5',filename:'MysticXXX_MMH3-V5.safetensors',originalFilename:'MysticXXX_MMH3-V5.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-cxy-kiss-v3',name:'CXY Kiss v3',filename:'cxy_kiss_v3_000002200.safetensors',originalFilename:'cxy_kiss_v3_000002200.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-nipplesuck-k3nk',name:'Nipple Suck k3nk',filename:'h3-nipplesuck-step00007000-k3nk.safetensors',originalFilename:'h3-nipplesuck-step00007000-k3nk.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-jav-voice',name:'MiniMax JAV Voice',filename:'minimax-jav-voice.safetensors',originalFilename:'minimax-jav-voice.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-hm-pussy-v2',name:'HM Pussy V2',filename:'HMPussyV2.safetensors',originalFilename:'HMPussyV2.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-rough-sex',name:'Rough Sex',filename:'Rough.Sex.safetensors',originalFilename:'Rough.Sex.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-h3-speed-slider-1-1',name:'H3 Speed Slider 1.1',filename:'H3_speed_slider_1.1.safetensors',originalFilename:'H3_speed_slider_1.1.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-hmnsfw-extreme-realism',name:'HMNSFW Extreme Realism',filename:'HMNSFW-Extreme-Realism.safetensors',originalFilename:'HMNSFW-Extreme-Realism.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-h3-cunnilingus-k3nk',name:'H3 Cunnilingus (k3nk)',filename:'h3-cunnilingus-step16000-k3nk-r16-k3nk.safetensors',originalFilename:'h3-cunnilingus-step16000-k3nk-r16-k3nk.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-cxy-kiss-v03',name:'CXY Kiss v03',filename:'cxy_kiss_v03_000002000.safetensors',originalFilename:'cxy_kiss_v03_000002000.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-anal-minimax-v1',name:'Anal Minimax v1',filename:'analMinimax_v1.safetensors',originalFilename:'analMinimax_v1.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-h3-vbvr-pro-v2',name:'H3 VBVR Pro V2',filename:'H3_VBVR_Pro-V2.safetensors',originalFilename:'H3_VBVR_Pro-V2.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-cinema-mh3-v02',name:'Cinema MH3 V02',filename:'Cinema-MH3-V02_000010000.safetensors',originalFilename:'Cinema-MH3-V02_000010000.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-animensfw',name:'Eros Anime NSFW',filename:'Eros_AnimeNSFW.safetensors',originalFilename:'Eros_AnimeNSFW.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-assjiggle',name:'Eros Ass Jiggle',filename:'Eros_AssJiggle.safetensors',originalFilename:'Eros_AssJiggle.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-cummerge',name:'Eros Cum Merge',filename:'Eros_CumMerge.safetensors',originalFilename:'Eros_CumMerge.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-finalcut',name:'Eros Final Cut',filename:'Eros_FinalCut.safetensors',originalFilename:'Eros_FinalCut.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-motionbooster-v2',name:'Eros Motion Booster V2',filename:'Eros_MotionBooster_V2.safetensors',originalFilename:'Eros_MotionBooster_V2.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-plora',name:'Eros PLoRA',filename:'Eros_PLoRA.safetensors',originalFilename:'Eros_PLoRA.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-silveranel-warmup',name:'Eros Silver Anel Warmup',filename:'Eros_SilverAnel_Warmup.safetensors',originalFilename:'Eros_SilverAnel_Warmup.safetensors',sha256:'',defaultStrength:1},
 {id:'veda-eros-slopbounce',name:'Eros Slop Bounce',filename:'Eros_SlopBounce.safetensors',originalFilename:'Eros_SlopBounce.safetensors',sha256:'',defaultStrength:1}
];
try{
  const lib=JSON.parse(localStorage.getItem(KEY)||'[]');
  if(Array.isArray(lib)){
    for(const e of extras) if(!lib.some(item=>item&&item.filename===e.filename)) lib.push(e);
    localStorage.setItem(KEY,JSON.stringify(lib));
  }
}catch(e){}
})();
