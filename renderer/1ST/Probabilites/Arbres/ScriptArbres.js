function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
  }


function dessinarbre(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  if (k==3) {
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,20);context.moveTo(430,55);context.lineTo(620,90);
  context.moveTo(430,160);context.lineTo(620,125);context.moveTo(430,160);context.lineTo(620,195);
  context.moveTo(430,265);context.lineTo(620,230);context.moveTo(430,265);context.lineTo(620,300);
  context.moveTo(430,370);context.lineTo(620,335);context.moveTo(430,370);context.lineTo(620,405);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`R`,214,112);context.fillText(`E`,214,322);
  context.fillText(`R`,412.5,59.5);context.fillText(`E`,412.5,164.5);context.fillText(`R`,412.5,269.5);context.fillText(`E`,412.5,374.5);
  context.fillText(`R`,625,24.5);context.fillText(`E`,625,94.5);context.fillText(`R`,625,129.5);context.fillText(`E`,625,199.5);
  context.fillText(`R`,625,234.5);context.fillText(`E`,625,304.5);context.fillText(`R`,625,339.5);context.fillText(`E`,625,409.5);
  context.fillText(`${p1v}`,110,140);context.fillText(`${p2v}`,110,300);
  context.fillText(`${p1v}`,310,70);context.fillText(`${p2v}`,310,160);context.fillText(`${p1v}`,310,280);context.fillText(`${p2v}`,310,370);
  context.fillText(`${p1v}`,520,30);context.fillText(`${p2v}`,520,100);context.fillText(`${p1v}`,520,130);context.fillText(`${p2v}`,520,200);
  context.fillText(`${p1v}`,520,235);context.fillText(`${p2v}`,520,305);context.fillText(`${p1v}`,520,340);context.fillText(`${p2v}`,520,410);
}
  if (k==4) {
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,110);context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,225);context.lineTo(590,210);context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,310);context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,225);context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
  }
}


function dessinarbre3rep3R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,20);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,90);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(430,160);context.lineTo(620,125);context.moveTo(430,160);context.lineTo(620,195);
  context.moveTo(430,265);context.lineTo(620,230);context.moveTo(430,265);context.lineTo(620,300);
  context.moveTo(430,370);context.lineTo(620,335);context.moveTo(430,370);context.lineTo(620,405);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`R`,214,112);context.fillText(`E`,214,322);
  context.fillText(`R`,412.5,59.5);context.fillText(`E`,412.5,164.5);context.fillText(`R`,412.5,269.5);context.fillText(`E`,412.5,374.5);
  context.fillText(`R`,625,24.5);context.fillText(`E`,625,94.5);context.fillText(`R`,625,129.5);context.fillText(`E`,625,199.5);
  context.fillText(`R`,625,234.5);context.fillText(`E`,625,304.5);context.fillText(`R`,625,339.5);context.fillText(`E`,625,409.5);
  context.fillText(`${p1v}`,110,140);context.fillText(`${p2v}`,110,300);
  context.fillText(`${p1v}`,310,70);context.fillText(`${p2v}`,310,160);context.fillText(`${p1v}`,310,280);context.fillText(`${p2v}`,310,370);
  context.fillText(`${p1v}`,520,30);context.fillText(`${p2v}`,520,100);context.fillText(`${p1v}`,520,130);context.fillText(`${p2v}`,520,200);
  context.fillText(`${p1v}`,520,235);context.fillText(`${p2v}`,520,305);context.fillText(`${p1v}`,520,340);context.fillText(`${p2v}`,520,410);
  
}

function dessinarbre3rep2R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,20);
  context.moveTo(430,160);context.lineTo(620,195);
  context.moveTo(430,265);context.lineTo(620,300);
  context.moveTo(430,370);context.lineTo(620,335);context.moveTo(430,370);context.lineTo(620,405);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,90);
  context.moveTo(430,160);context.lineTo(620,125);
  context.moveTo(430,265);context.lineTo(620,230);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`R`,214,112);context.fillText(`E`,214,322);
  context.fillText(`R`,412.5,59.5);context.fillText(`E`,412.5,164.5);context.fillText(`R`,412.5,269.5);context.fillText(`E`,412.5,374.5);
  context.fillText(`R`,625,24.5);context.fillText(`E`,625,94.5);context.fillText(`R`,625,129.5);context.fillText(`E`,625,199.5);
  context.fillText(`R`,625,234.5);context.fillText(`E`,625,304.5);context.fillText(`R`,625,339.5);context.fillText(`E`,625,409.5);
  context.fillText(`${p1v}`,110,140);context.fillText(`${p2v}`,110,300);
  context.fillText(`${p1v}`,310,70);context.fillText(`${p2v}`,310,160);context.fillText(`${p1v}`,310,280);context.fillText(`${p2v}`,310,370);
  context.fillText(`${p1v}`,520,30);context.fillText(`${p2v}`,520,100);context.fillText(`${p1v}`,520,130);context.fillText(`${p2v}`,520,200);
  context.fillText(`${p1v}`,520,235);context.fillText(`${p2v}`,520,305);context.fillText(`${p1v}`,520,340);context.fillText(`${p2v}`,520,410);
  
}

function dessinarbre3rep1R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,20);context.moveTo(430,55);context.lineTo(620,90);
  context.moveTo(430,160);context.lineTo(620,125);
  context.moveTo(430,265);context.lineTo(620,230);
  context.moveTo(430,370);context.lineTo(620,405);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(430,160);context.lineTo(620,195);
  context.moveTo(430,265);context.lineTo(620,300);
  context.moveTo(430,370);context.lineTo(620,335);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`R`,214,112);context.fillText(`E`,214,322);
  context.fillText(`R`,412.5,59.5);context.fillText(`E`,412.5,164.5);context.fillText(`R`,412.5,269.5);context.fillText(`E`,412.5,374.5);
  context.fillText(`R`,625,24.5);context.fillText(`E`,625,94.5);context.fillText(`R`,625,129.5);context.fillText(`E`,625,199.5);
  context.fillText(`R`,625,234.5);context.fillText(`E`,625,304.5);context.fillText(`R`,625,339.5);context.fillText(`E`,625,409.5);
  context.fillText(`${p1v}`,110,140);context.fillText(`${p2v}`,110,300);
  context.fillText(`${p1v}`,310,70);context.fillText(`${p2v}`,310,160);context.fillText(`${p1v}`,310,280);context.fillText(`${p2v}`,310,370);
  context.fillText(`${p1v}`,520,30);context.fillText(`${p2v}`,520,100);context.fillText(`${p1v}`,520,130);context.fillText(`${p2v}`,520,200);
  context.fillText(`${p1v}`,520,235);context.fillText(`${p2v}`,520,305);context.fillText(`${p1v}`,520,340);context.fillText(`${p2v}`,520,410);
}

function dessinarbre3rep0R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(430,55);context.lineTo(620,20);context.moveTo(430,55);context.lineTo(620,90);
  context.moveTo(430,160);context.lineTo(620,125);context.moveTo(430,160);context.lineTo(620,195);
  context.moveTo(430,265);context.lineTo(620,230);context.moveTo(430,265);context.lineTo(620,300);
  context.moveTo(430,370);context.lineTo(620,335);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(430,370);context.lineTo(620,405);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,107.5);context.lineTo(410,55);context.moveTo(230,107.5);context.lineTo(410,160);
  context.moveTo(230,317.5);context.lineTo(410,265);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(230,317.5);context.lineTo(410,370);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,107.5);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(30,212.5);context.lineTo(210,317.5);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '20px serif';
  context.fillText(`R`,214,112);context.fillText(`E`,214,322);
  context.fillText(`R`,412.5,59.5);context.fillText(`E`,412.5,164.5);context.fillText(`R`,412.5,269.5);context.fillText(`E`,412.5,374.5);
  context.fillText(`R`,625,24.5);context.fillText(`E`,625,94.5);context.fillText(`R`,625,129.5);context.fillText(`E`,625,199.5);
  context.fillText(`R`,625,234.5);context.fillText(`E`,625,304.5);context.fillText(`R`,625,339.5);context.fillText(`E`,625,409.5);
  context.fillText(`${p1v}`,110,140);context.fillText(`${p2v}`,110,300);
  context.fillText(`${p1v}`,310,70);context.fillText(`${p2v}`,310,160);context.fillText(`${p1v}`,310,280);context.fillText(`${p2v}`,310,370);
  context.fillText(`${p1v}`,520,30);context.fillText(`${p2v}`,520,100);context.fillText(`${p1v}`,520,130);context.fillText(`${p2v}`,520,200);
  context.fillText(`${p1v}`,520,235);context.fillText(`${p2v}`,520,305);context.fillText(`${p1v}`,520,340);context.fillText(`${p2v}`,520,410);
}

function dessinarbre4rep4R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,110);context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,225);context.lineTo(590,210);context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,310);context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,225);context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
}

function dessinarbre4rep3R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);
  context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,310);context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);
  context.moveTo(460,125);context.lineTo(590,110);
  context.moveTo(460,225);context.lineTo(590,210);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);
  context.moveTo(310,250);context.lineTo(440,225);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
}

function dessinarbre4rep2R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);
  context.moveTo(460,125);context.lineTo(590,110);
  context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,225);context.lineTo(590,210);
  context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);
  context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);
  context.moveTo(460,325);context.lineTo(590,310);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);
  context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,225);context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
  }

function dessinarbre4rep1R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,110);context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);
  context.moveTo(460,225);context.lineTo(590,210);context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);
  context.moveTo(460,325);context.lineTo(590,310);
  context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);
  context.moveTo(310,250);context.lineTo(440,225);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
}

function dessinarbre4rep0R(p1v,p2v,k,canvas) {
  var canvas = document.getElementById(canvas); 
  var context = canvas.getContext("2d");
  context.beginPath();
  context.moveTo(460,25);context.lineTo(590,10);context.moveTo(460,25);context.lineTo(590,40);
  context.moveTo(460,75);context.lineTo(590,60);context.moveTo(460,75);context.lineTo(590,90);
  context.moveTo(460,125);context.lineTo(590,110);context.moveTo(460,125);context.lineTo(590,140);
  context.moveTo(460,175);context.lineTo(590,160);context.moveTo(460,175);context.lineTo(590,190);
  context.moveTo(460,225);context.lineTo(590,210);context.moveTo(460,225);context.lineTo(590,240);
  context.moveTo(460,275);context.lineTo(590,260);context.moveTo(460,275);context.lineTo(590,290);
  context.moveTo(460,325);context.lineTo(590,310);context.moveTo(460,325);context.lineTo(590,340);
  context.moveTo(460,375);context.lineTo(590,360);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(460,375);context.lineTo(590,390);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,50);context.lineTo(440,25);context.moveTo(310,50);context.lineTo(440,75);
  context.moveTo(310,150);context.lineTo(440,125);context.moveTo(310,150);context.lineTo(440,175);
  context.moveTo(310,250);context.lineTo(440,225);context.moveTo(310,250);context.lineTo(440,275);
  context.moveTo(310,350);context.lineTo(440,325);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(310,350);context.lineTo(440,375);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,100);context.lineTo(290,50);context.moveTo(160,100);context.lineTo(290,150);
  context.moveTo(160,300);context.lineTo(290,250);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(160,300);context.lineTo(290,350);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,100);
  context.strokeStyle="black";
  context.lineWidth=3;
  context.stroke();
  context.beginPath();
  context.moveTo(10,200);context.lineTo(140,300);
  context.strokeStyle="red";
  context.lineWidth=3;
  context.stroke();
  context.font = '14px serif';
  context.fillText(`R`,145,105);context.fillText(`E`,145,305);
  context.fillText(`R`,295,55);context.fillText(`E`,295,155);context.fillText(`R`,295,255);context.fillText(`E`,295,355);
  context.fillText(`R`,445,30);context.fillText(`E`,445,80);context.fillText(`R`,445,130);context.fillText(`E`,445,180);
  context.fillText(`R`,445,230);context.fillText(`E`,445,280);context.fillText(`R`,445,330);context.fillText(`E`,445,380);
  context.fillText(`R`,595,15);context.fillText(`E`,595,45);context.fillText(`R`,595,65);context.fillText(`E`,595,95);
  context.fillText(`R`,595,115);context.fillText(`E`,595,145);context.fillText(`R`,595,165);context.fillText(`E`,595,195);
  context.fillText(`R`,595,215);context.fillText(`E`,595,245);context.fillText(`R`,595,265);context.fillText(`E`,595,295);
  context.fillText(`R`,595,315);context.fillText(`E`,595,345);context.fillText(`R`,595,365);context.fillText(`E`,595,395);
  context.fillText(`${p1v}`,530,10);context.fillText(`${p2v}`,530,48);context.fillText(`${p1v}`,530,62);context.fillText(`${p2v}`,530,98);
  context.fillText(`${p1v}`,530,110);context.fillText(`${p2v}`,530,148);context.fillText(`${p1v}`,530,162);context.fillText(`${p2v}`,530,198);
  context.fillText(`${p1v}`,530,210);context.fillText(`${p2v}`,530,248);context.fillText(`${p1v}`,530,262);context.fillText(`${p2v}`,530,298);
  context.fillText(`${p1v}`,530,310);context.fillText(`${p2v}`,530,348);context.fillText(`${p1v}`,530,362);context.fillText(`${p2v}`,530,398);
  context.fillText(`${p1v}`,370,30);context.fillText(`${p2v}`,370,80);context.fillText(`${p1v}`,370,130);context.fillText(`${p2v}`,370,180);
  context.fillText(`${p1v}`,370,230);context.fillText(`${p2v}`,370,288);context.fillText(`${p1v}`,370,330);context.fillText(`${p2v}`,370,380);
  context.fillText(`${p1v}`,220,60);context.fillText(`${p2v}`,220,150);context.fillText(`${p1v}`,220,260);context.fillText(`${p2v}`,220,350);
  context.fillText(`${p1v}`,70,130);context.fillText(`${p2v}`,70,280);
}

function tirage3() {
  let rep = [];
  let choix = [0,1,2,3]
  let k1 = nbrealéa(0,3);
  rep.push(choix[k1]);
  choix.splice(k1,1);
  let k2 = nbrealéa(0,2);
  rep.push(choix[k2]);
  choix.splice(k2,1);
  let k3 = nbrealéa(0,1);
  rep.push(choix[k3]);
  choix.splice(k3,1);
  rep.push(choix[0]);
  return rep;
}

function tirage4() {
  let rep = [];
  let choix = [0,1,2,3,4]
  let k1 = nbrealéa(0,4);
  rep.push(choix[k1]);
  choix.splice(k1,1);
  let k2 = nbrealéa(0,3);
  rep.push(choix[k2]);
  choix.splice(k2,1);
  let k3 = nbrealéa(0,2);
  rep.push(choix[k3]);
  choix.splice(k3,1);
  let k4 = nbrealéa(0,1);
  rep.push(choix[k4]);
  choix.splice(k4,1);
  rep.push(choix[0]);
  return rep;
}

function reponses3(tirage1,tirage2,tirage3,tirage4) {
  let rep;
  if (tirage1==0) {coef1=1;puis11=0;puis21=3;}
  if (tirage1==1) {coef1=3;puis11=1;puis21=2;}
  if (tirage1==2) {coef1=3;puis11=2;puis21=1;}
  if (tirage1==3) {coef1=1;puis11=3;puis21=0;}
  if (tirage2==0) {coef2=1;puis12=0;puis22=3;}
  if (tirage2==1) {coef2=3;puis12=1;puis22=2;}
  if (tirage2==2) {coef2=3;puis12=2;puis22=1;}
  if (tirage2==3) {coef2=1;puis12=3;puis22=0;}
  if (tirage3==0) {coef3=1;puis13=0;puis23=3;}
  if (tirage3==1) {coef3=3;puis13=1;puis23=2;}
  if (tirage3==2) {coef3=3;puis13=2;puis23=1;}
  if (tirage3==3) {coef3=1;puis13=3;puis23=0;}
  if (tirage4==0) {coef4=1;puis14=0;puis24=3;}
  if (tirage4==1) {coef4=3;puis14=1;puis24=2;}
  if (tirage4==2) {coef4=3;puis14=2;puis24=1;}
  if (tirage4==3) {coef4=1;puis14=3;puis24=0;}
  return rep = [coef1,puis11,puis21,coef2,puis12,puis22,coef3,puis13,puis23,coef4,puis14,puis24];
}

function reponses4(tirage1,tirage2,tirage3,tirage4,tirage5) {
  let rep;
  if (tirage1==0) {coef1=1;puis11=0;puis21=4;}
  if (tirage1==1) {coef1=4;puis11=1;puis21=3;}
  if (tirage1==2) {coef1=6;puis11=2;puis21=2;}
  if (tirage1==3) {coef1=4;puis11=3;puis21=1;}
  if (tirage1==4) {coef1=1;puis11=4;puis21=0;}
  if (tirage2==0) {coef2=1;puis12=0;puis22=4;}
  if (tirage2==1) {coef2=4;puis12=1;puis22=3;}
  if (tirage2==2) {coef2=6;puis12=2;puis22=2;}
  if (tirage2==3) {coef2=4;puis12=3;puis22=1;}
  if (tirage2==4) {coef2=1;puis12=4;puis22=0;}
  if (tirage3==0) {coef3=1;puis13=0;puis23=4;}
  if (tirage3==1) {coef3=4;puis13=1;puis23=3;}
  if (tirage3==2) {coef3=6;puis13=2;puis23=2;}
  if (tirage3==3) {coef3=4;puis13=3;puis23=1;}
  if (tirage3==4) {coef3=1;puis13=4;puis23=0;}
  if (tirage4==0) {coef4=1;puis14=0;puis24=4;}
  if (tirage4==1) {coef4=4;puis14=1;puis24=3;}
  if (tirage4==2) {coef4=6;puis14=2;puis24=2;}
  if (tirage4==3) {coef4=4;puis14=3;puis24=1;}
  if (tirage4==4) {coef4=1;puis14=4;puis24=0;}
  if (tirage5==0) {coef5=1;puis15=0;puis25=4;}
  if (tirage5==1) {coef5=4;puis15=1;puis25=3;}
  if (tirage5==2) {coef5=6;puis15=2;puis25=2;}
  if (tirage5==3) {coef5=4;puis15=3;puis25=1;}
  if (tirage5==4) {coef5=1;puis15=4;puis25=0;}
  return rep = [coef1,puis11,puis21,coef2,puis12,puis22,coef3,puis13,puis23,coef4,puis14,puis24,coef5,puis15,puis25];
}

function auplus3(t1,t2,t3,t4) {
  let rep;
  if (t1==0) {rep1=`A`;}
  if (t2==0) {rep1=`B`;}
  if (t3==0) {rep1=`C`;}
  if (t4==0) {rep1=`D`;}
  if (t1==1) {rep2=`A`;}
  if (t2==1) {rep2=`B`;}
  if (t3==1) {rep2=`C`;}
  if (t4==1) {rep2=`D`;}
  return rep = [rep1,rep2];
}

function auplus4(t1,t2,t3,t4,t5) {
  let rep;
  if (t1==0) {rep1=`A`;}
  if (t2==0) {rep1=`B`;}
  if (t3==0) {rep1=`C`;}
  if (t4==0) {rep1=`D`;}
  if (t5==0) {rep1=`E`;}
  if (t1==1) {rep2=`A`;}
  if (t2==1) {rep2=`B`;}
  if (t3==1) {rep2=`C`;}
  if (t4==1) {rep2=`D`;}
  if (t5==1) {rep2=`E`;}
  return rep = [rep1,rep2];
}

function auplusrep3(t1,t2,t3,t4,repa,repb,repc,repd) {
  let rep;
  if (t1==0) {rep1=repa;}
  if (t2==0) {rep1=repb;}
  if (t3==0) {rep1=repc;}
  if (t4==0) {rep1=repd;}
  if (t1==1) {rep2=repa;}
  if (t2==1) {rep2=repb;}
  if (t3==1) {rep2=repc;}
  if (t4==1) {rep2=repd;}
  return rep = rep1+rep2;
}

function auplusrep4(t1,t2,t3,t4,t5,repa,repb,repc,repd,repe) {
  let rep;
  if (t1==0) {rep1=repa;}
  if (t2==0) {rep1=repb;}
  if (t3==0) {rep1=repc;}
  if (t4==0) {rep1=repd;}
  if (t5==0) {rep1=repe;}
  if (t1==1) {rep2=repa;}
  if (t2==1) {rep2=repb;}
  if (t3==1) {rep2=repc;}
  if (t4==1) {rep2=repd;}
  if (t5==1) {rep2=repe;}
  return rep = rep1+rep2;
}

function aumoins3(t1,t2,t3,t4) {
  let rep;
  if (t1==0) {rep4=`A`;}
  if (t2==0) {rep4=`B`;}
  if (t3==0) {rep4=`C`;}
  if (t4==0) {rep4=`D`;}
  if (t1==1) {rep1=`A`;}
  if (t2==1) {rep1=`B`;}
  if (t3==1) {rep1=`C`;}
  if (t4==1) {rep1=`D`;}
  if (t1==2) {rep2=`A`;}
  if (t2==2) {rep2=`B`;}
  if (t3==2) {rep2=`C`;}
  if (t4==2) {rep2=`D`;}
  if (t1==3) {rep3=`A`;}
  if (t2==3) {rep3=`B`;}
  if (t3==3) {rep3=`C`;}
  if (t4==3) {rep3=`D`;}
  return rep = [rep1,rep2,rep3,rep4];
}

function aumoins4(t1,t2,t3,t4,t5) {
  let rep;
  if (t1==0) {rep5=`A`;}
  if (t2==0) {rep5=`B`;}
  if (t3==0) {rep5=`C`;}
  if (t4==0) {rep5=`D`;}
  if (t5==0) {rep5=`E`;}
  if (t1==1) {rep1=`A`;}
  if (t2==1) {rep1=`B`;}
  if (t3==1) {rep1=`C`;}
  if (t4==1) {rep1=`D`;}
  if (t5==1) {rep1=`E`;}
  if (t1==2) {rep2=`A`;}
  if (t2==2) {rep2=`B`;}
  if (t3==2) {rep2=`C`;}
  if (t4==2) {rep2=`D`;}
  if (t5==2) {rep2=`E`;}
  if (t1==3) {rep3=`A`;}
  if (t2==3) {rep3=`B`;}
  if (t3==3) {rep3=`C`;}
  if (t4==3) {rep3=`D`;}
  if (t5==3) {rep3=`E`;}
  if (t1==4) {rep4=`A`;}
  if (t2==4) {rep4=`B`;}
  if (t3==4) {rep4=`C`;}
  if (t4==4) {rep4=`D`;}
  if (t5==4) {rep4=`E`;}
  return rep = [rep1,rep2,rep3,rep4,rep5];
}

function aumoinsrep3(t1,t2,t3,t4,repa,repb,repc,repd) {
  let rep;
  if (t1==0) {rep4=repa;}
  if (t2==0) {rep4=repb;}
  if (t3==0) {rep4=repc;}
  if (t4==0) {rep4=repd;}
  return rep = 1-rep4;
}

function aumoinsrep4(t1,t2,t3,t4,t5,repa,repb,repc,repd,repe) {
  let rep;
  if (t1==0) {rep4=repa;}
  if (t2==0) {rep4=repb;}
  if (t3==0) {rep4=repc;}
  if (t4==0) {rep4=repd;}
  if (t5==0) {rep4=repe;}
  return rep = 1-rep4;
}


let p1 = 5*nbrealéa(1,19)/100;
let p1pourcent = Math.round(p1*100*100)/100;
let p1v = avecVirgule(p1);
let p2 = 1-p1;
let p2v = avecVirgule(Math.round(p2*100)/100);
let test3 = tirage3();
let tirage31 = test3[0];
let tirage32 = test3[1];
let tirage33 = test3[2];
let tirage34 = test3[3];
let reps3 = reponses3(tirage31,tirage32,tirage33,tirage34);
let repa3 = reps3[0]*p1**(reps3[1])*p2**(reps3[2]);
let repav3 = avecVirgule(Math.round(repa3*10000000000)/10000000000);
let repb3 = reps3[3]*p1**(reps3[4])*p2**(reps3[5]);
let repbv3 = avecVirgule(Math.round(repb3*10000000000)/10000000000);
let repc3 = reps3[6]*p1**(reps3[7])*p2**(reps3[8]);
let repcv3 = avecVirgule(Math.round(repc3*10000000000)/10000000000);
let repd3 = reps3[9]*p1**(reps3[10])*p2**(reps3[11]);
let repdv3 = avecVirgule(Math.round(repd3*10000000000)/10000000000);
let ap3 = auplus3(tirage31,tirage32,tirage33,tirage34);
let apv3 = avecVirgule(Math.round(auplusrep3(tirage31,tirage32,tirage33,tirage34,repa3,repb3,repc3,repd3)*10000000000)/10000000000);
let am3 = aumoins3(tirage31,tirage32,tirage33,tirage34);
let amv3 = avecVirgule(Math.round(aumoinsrep3(tirage31,tirage32,tirage33,tirage34,repa3,repb3,repc3,repd3)*10000000000)/10000000000);

let test4 = tirage4();
let tirage41 = test4[0];
let tirage42 = test4[1];
let tirage43 = test4[2];
let tirage44 = test4[3];
let tirage45 = test4[4];
let reps4 = reponses4(tirage41,tirage42,tirage43,tirage44,tirage45);
let repa4 = reps4[0]*p1**(reps4[1])*p2**(reps4[2]);
let repav4 = avecVirgule(Math.round(repa4*10000000000)/10000000000);
let repb4 = reps4[3]*p1**(reps4[4])*p2**(reps4[5]);
let repbv4 = avecVirgule(Math.round(repb4*10000000000)/10000000000);
let repc4 = reps4[6]*p1**(reps4[7])*p2**(reps4[8]);
let repcv4 = avecVirgule(Math.round(repc4*10000000000)/10000000000);
let repd4 = reps4[9]*p1**(reps4[10])*p2**(reps4[11]);
let repdv4 = avecVirgule(Math.round(repd4*10000000000)/10000000000);
let repe4 = reps4[12]*p1**(reps4[13])*p2**(reps4[14]);
let repev4 = avecVirgule(Math.round(repe4*10000000000)/10000000000);
let ap4 = auplus4(tirage41,tirage42,tirage43,tirage44,tirage45);
let apv4 = avecVirgule(Math.round(auplusrep4(tirage41,tirage42,tirage43,tirage44,tirage45,repa4,repb4,repc4,repd4,repe4)*10000000000)/10000000000);
let am4 = aumoins4(tirage41,tirage42,tirage43,tirage44,tirage45);
let amv4 = avecVirgule(Math.round(aumoinsrep4(tirage41,tirage42,tirage43,tirage44,tirage45,repa4,repb4,repc4,repd4,repe4)*10000000000)/10000000000);

let k = nbrealéa(3,4);


dessinarbre(p1v,p2v,k,"canvasS");
dessinarbre(p1v,p2v,k,"canvasC");



let enonce = document.getElementById('enonce');
let enonce2 = document.getElementById('enonce2');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');
let solutionRB = document.getElementById('solutionRB');
let solutionRH = document.getElementById('solutionRH');

let listeenonces = [`Une personne s'entraîne au tir à l'arc en vue d'une compétition.<br>
Il sait qu'il atteint la zone qu'il cible dans ${p1pourcent} % des cas.<br>
Il tire 3 flèches successivement.<br>
1) Représenter la situation à l'aide d'un arbre pondéré (on notera R : "il réussit son tir" et E : "son tir est un échec").<br>
2) Déterminer la probabilité des évènements suivants :<br>
$\\hspace{5mm}$ a) A : " Il atteint sa cible ${test3[0]} fois "<br>
$\\hspace{5mm}$ b) B : " Il atteint sa cible ${test3[1]} fois "<br>
$\\hspace{5mm}$ c) C : " Il atteint sa cible ${test3[2]} fois "<br>
$\\hspace{5mm}$ d) D : " Il atteint sa cible ${test3[3]} fois "<br>
$\\hspace{5mm}$ e) E : " Il atteint sa cible au moins une fois "<br>
$\\hspace{5mm}$ f) F : " Il atteint sa cible au plus une fois "<br>`,
`Une personne s'entraîne au tir à l'arc en vue d'une compétition.<br>
Il sait qu'il atteint la zone qu'il cible dans ${p1pourcent} % des cas.<br>
Il tire 4 flèches successivement.<br>
1) Représenter la situation à l'aide d'un arbre pondéré (on notera R : "il réussit son tir" et E : "son tir est un échec").<br>
2) Déterminer la probabilité des évènements suivants :<br>
$\\hspace{5mm}$ a) A : " Il atteint sa cible ${test4[0]} fois "<br>
$\\hspace{5mm}$ b) B : " Il atteint sa cible ${test4[1]} fois "<br>
$\\hspace{5mm}$ c) C : " Il atteint sa cible ${test4[2]} fois "<br>
$\\hspace{5mm}$ d) D : " Il atteint sa cible ${test4[3]} fois "<br>
$\\hspace{5mm}$ e) E : " Il atteint sa cible ${test4[4]} fois "<br>
$\\hspace{5mm}$ f) F : " Il atteint sa cible au moins une fois "<br>
$\\hspace{5mm}$ g) G : " Il atteint sa cible au plus une fois "<br>`];

let listecorrection = [`2) a) P(A) $=${reps3[0]}\\times ${p1v}^{${reps3[1]}}\\times ${p2v}^{${reps3[2]}}=${repav3}$<br>
$\\hspace{4mm}$ b) P(B) $=${reps3[3]}\\times ${p1v}^{${reps3[4]}}\\times ${p2v}^{${reps3[5]}}=${repbv3}$<br>
$\\hspace{4mm}$ c) P(C) $=${reps3[6]}\\times ${p1v}^{${reps3[7]}}\\times ${p2v}^{${reps3[8]}}=${repcv3}$<br>
$\\hspace{4mm}$ d) P(D) $=${reps3[9]}\\times ${p1v}^{${reps3[10]}}\\times ${p2v}^{${reps3[11]}}=${repdv3}$<br>
$\\hspace{4mm}$ e) P(E) = P(${am3[0]}) + P(${am3[1]}) + P(${am3[2]}) = 1 - P(${am3[3]}) = $${amv3}$ <br>
$\\hspace{4mm}$ f) P(F) = P(${ap3[0]}) + P(${ap3[1]}) = $${apv3}$`,
`2) a) P(A) $=${reps4[0]}\\times ${p1v}^{${reps4[1]}}\\times ${p2v}^{${reps4[2]}}=${repav4}$<br>
$\\hspace{4mm}$ b) P(B) $=${reps4[3]}\\times ${p1v}^{${reps4[4]}}\\times ${p2v}^{${reps4[5]}}=${repbv4}$<br>
$\\hspace{4mm}$ c) P(C) $=${reps4[6]}\\times ${p1v}^{${reps4[7]}}\\times ${p2v}^{${reps4[8]}}=${repcv4}$<br>
$\\hspace{4mm}$ d) P(D) $=${reps4[9]}\\times ${p1v}^{${reps4[10]}}\\times ${p2v}^{${reps4[11]}}=${repdv4}$<br>
$\\hspace{4mm}$ e) P(E) $=${reps4[12]}\\times ${p1v}^{${reps4[13]}}\\times ${p2v}^{${reps4[14]}}=${repev4}$<br>
$\\hspace{4mm}$ f) P(F) = P(${am4[0]}) + P(${am4[1]}) + P(${am4[2]}) + P(${am4[3]}) = 1 - P(${am4[4]}) = $${amv4}$ <br>
$\\hspace{4mm}$ g) P(G) = P(${ap4[0]}) + P(${ap4[1]}) = $${apv4}$`];

let listesolutions = [`2) a) P(A) $=${repav3}$<br>
$\\hspace{4mm}$ b) P(B) $=${repbv3}$<br>
$\\hspace{4mm}$ c) P(C) $=${repcv3}$<br>
$\\hspace{4mm}$ d) P(D) $=${repdv3}$<br>
$\\hspace{4mm}$ e) P(E) = $${amv3}$ <br>
$\\hspace{4mm}$ f) P(F) = $${apv3}$`,
`2) a) P(A) $=${repav4}$<br>
$\\hspace{4mm}$ b) P(B) $=${repbv4}$<br>
$\\hspace{4mm}$ c) P(C) $=${repcv4}$<br>
$\\hspace{4mm}$ d) P(D) $=${repdv4}$<br>
$\\hspace{4mm}$ e) P(E) $=${repev4}$<br>
$\\hspace{4mm}$ f) P(F) = $${amv4}$ <br>
$\\hspace{4mm}$ g) P(G) = $${apv4}$`]

enonce.innerHTML = listeenonces[k-3];
enonce2.innerHTML = ``;

solution1.innerHTML = `1)`;
solution2.innerHTML = listesolutions[k-3];

correction1.innerHTML = `1)`;
correction2.innerHTML = listecorrection[k-3];


solutions.addEventListener('click', () => {
    solution.style.display = "block";
    })

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML ;
})

recommencer.addEventListener('click', () => {
    location.reload(true);
})

accueil.addEventListener('click', () => {
    location.href = "../../../index.html";
})

MenuSeconde.addEventListener('click', () => {
    location.href = "../../../Menus/Menu1ST.html";
})

MenuSecondeEquations.addEventListener('click', () => {
    location.href = "../../../Menus/Menu1STprobabilitesarbresvariablesaleatoires.html";
})