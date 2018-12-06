let CharacterPos = 0;
let MsgBuffer = "";
let TypeDelay = 100;
let NxtMsgDelay = 2000;
let MsgIndex = 0;
let delay = '';
let MsgArray = Array("Welcome to your Pokedex, trainer !");

  function startTyping() {
  var id = document.getElementById('typingText');
  if (CharacterPos != MsgArray[MsgIndex].length) {
     MsgBuffer  = MsgBuffer + MsgArray[MsgIndex].charAt(CharacterPos);
     id.value = MsgBuffer+'_';
     delay = TypeDelay;
   } else {
      delay = NxtMsgDelay;
      MsgBuffer   = "";
      CharacterPos = -1;
        if (MsgIndex!=MsgArray.length-1){
            MsgIndex++;
        }else {
            MsgIndex = 0;
        }
    }
    CharacterPos++;
    setTimeout("startTyping('"+CharacterPos+"')",delay);
  }

window.onload = ()=> startTyping();
