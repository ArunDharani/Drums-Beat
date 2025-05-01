document.addEventListener("keypress", (event) => {
    const key = event.key.toLowerCase();
  
    if (key === 'a') {
      const ima = document.querySelector(".crash");
      const sound = new Audio('./crash.mp3');
      sound.play(); 
      ima.style.transform = "scale(1.1)";
      setTimeout(() => {
        ima.style.transform = "scale(1)";
      }, 100);
    }

    else if (key === 's') {
        const ima = document.querySelector(".tom1");
        const sound = new Audio('./tom-1.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
    }

    else if (key === 'd') {
        const ima = document.querySelector(".tom2");
        const sound = new Audio('./tom-2.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
      }

    else if (key === 'v') {
        const ima = document.querySelector(".tom3");
        const sound = new Audio('./tom-3.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
    }
    
    else if (key === 'b') {
        const ima = document.querySelector(".tom4");
        const sound = new Audio('./tom-4.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
    }

    else if (key === 'j') {
        const ima = document.querySelector(".bass");
        const sound = new Audio('./kick-bass.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
    }

    else if (key === 'k') {
        const ima = document.querySelector(".snare");
        const sound = new Audio('./snare.mp3');
        sound.play(); 
        ima.style.transform = "scale(1.1)";
        setTimeout(() => {
          ima.style.transform = "scale(1)";
        }, 100);
    }

    else {
        const para = document.querySelector('.change');
        para.textContent = "please press correctly";
        setTimeout(() => {
            para.textContent = " ";
        }, 500);
    }

  });
  