camera = document.getElementById("camera");
      
Webcam.attach( camera );      
  Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
  });


function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    
    function check()
    {
      img = document.getElementById('selfie_image');
      classifier.classify(img, gotResult);
    }
  }
  
  function speak()
  {

    var synth = window.speechSynthesis;
    speakdate = "inglês this is"+ results[0].label(speakdate);
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
   
    
 document.getElementById("resultobjectname").innerHTML = results[0].label;
 document.getElementById("resultobjectaccuracy").innerHTML = results[0].confidence.tofixed;
    


}
}


function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}

  console.log('ml5 version:', ml5.version);
  
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

  function modelLoaded() {
    console.log('Model Loaded!');
  }
      
  function check()
  {
    //Escreva o código para armazenar selfie_image em uma variável img e, em seguida, utilize a função classify() para classificá-la
  
  }
