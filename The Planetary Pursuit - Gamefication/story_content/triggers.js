function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EhrF2OYtrl":
        Script1();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5rwvH6Hp1Jy');
const duration = 750;
const easing = 'ease-out';
const id = '69ZxkBfpAes';
const pulseAmount = 0.07;
const delay = 5000;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
