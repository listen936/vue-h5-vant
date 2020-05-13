// 自适应方案1:根据屏幕宽度设置html的font-size(1rem = 100px )
// 自适应方案2:设置html的font-size为13.33333vw(1rem = 100px) 再用媒体查询设置font-size的最大值
function setHtmlFontSize () {
  // 最大为200px
  const cale = window.screen.availWidth > 750 ? 2 : window.screen.availWidth / 375
  window.document.documentElement.style.fontSize = `${100 * cale}px`
  //   console.log('calc', cale)
}
setHtmlFontSize()
window.onresize = setHtmlFontSize
