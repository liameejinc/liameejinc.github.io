
$('.menu-move').mousemove(function (e) {
 
  var i = $(".circle-move"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle-move'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1,
    ease: Power2.easeOut
  })
  
});

$('.menu-move').mouseleave(function (e) {
 
  var i = $(".circle-move"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle-move'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
});

$('.menu-move-2').mousemove(function (e) {
 
  var i = $(".circle-move-2"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  
  TweenMax.to($('.circle-move-2'), .3, {
    x: (s - i.width() / 2) / i.width() * 50,
    y: (o - i.height() / 2) / i.height() * 50,
    scale: 1,
    ease: Power2.easeOut
  })
  
});

$('.menu-move-2').mouseleave(function (e) {
 
  var i = $(".circle-move-2"),
      s = e.pageX - i.offset().left,
      o = e.pageY - i.offset().top;
  TweenMax.to($('.circle-move-2'), .3, {
    x: 0,
    y: 0,
    scale: 1,
    ease: Power2.easeOut
  })
});


const element = document.querySelectorAll(".badge__char");
const step = 360/element.length;

element.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate', (i * step) + 'deg');
})

const element2 = document.querySelectorAll(".badge__char-2");
const step2 = 360/element2.length;

element2.forEach((elem, i) => {
  elem.style.setProperty('--char-rotate-2', (i * step2) + 'deg');
})

const foo = (360 / 7);

for (i = 0; i <= 7; i++) {
  console.log((i * foo) + 'deg');
}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
  } else {
    document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0)";
  }
}

//Note: add date and time to location:
//let d = new Date();
//document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

//Note: make the DIV element draggagle:

dragElement(document.getElementById("mydiv"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /*if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /*otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    //get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    //call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    //calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /*stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Note: setting up the modal
//Get the modal
var modal = document.getElementById("contact-modal");

//Get the button that opens the modal
var btn = document.getElementById("contact-button");

//Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

//When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

//When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

//When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Getting the element inside the element ** crucial for making sure form is still active!
function GetElementInsideContainer(containerID, childID) {
    var elm = document.getElementById(childID);
    var parent = elm ? elm.parentNode : {};
    return (parent.id && parent.id === containerID) ? elm : {};
}
var form = document.GetElementInsideContainer("contact-modal-div", "my-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


    $(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header").removeClass("active");
        }
    });
});