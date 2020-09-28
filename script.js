const title="3TP Pany, krule, rzule";
var x = 0;
function sliceText() {
        document.body.innerHTML = (title.slice(0, x));
        x++;
        if (x > title.length +1)
        {
            x = 0;
            document.body.innerHTML = "";
        }
    }
    window.setInterval(sliceText, 100);
  
