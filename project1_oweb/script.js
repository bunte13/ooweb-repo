
//****************za navbarot da bide so sliding mechanism*****************************
document.addEventListener('DOMContentLoaded', function () {
    const indicator = document.querySelector('.nav-indicator');
    const items = document.querySelectorAll('.nav-item');

    function handleIndicator(el) {
        items.forEach(item => {
            item.classList.remove('is-active');
            item.querySelector('a').removeAttribute('style');
        });

        indicator.style.width = `${el.offsetWidth}px`;
        indicator.style.left = `${el.offsetLeft}px`;
        indicator.style.backgroundColor = el.getAttribute('active-color');

        el.classList.add('is-active');
        el.querySelector('a').style.color = el.getAttribute('active-color');
    }

    items.forEach((item) => {
        item.addEventListener('click', (e) => { handleIndicator(e.currentTarget) });
        item.addEventListener('mouseover', (e) => { handleIndicator(e.currentTarget) });
        if (item.classList.contains('is-active')) {
            handleIndicator(item);
        }
    });
});

//****************************slideshow********************************

 let slideIndex = 0;
    let slides = document.querySelectorAll('.slide');
    let dots = document.querySelectorAll('.dot');
    let slideInterval = setInterval(nextSlide, 3000);

    function showSlides(n){
        slideIndex = n;
        let i;
        for(i = 0;i<slides.length;i++){
            slides[i].style.opacity = "0";
        }
        for(i = 0;i< dots.length;i++){
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex].style.opacity = "1";
        dots[slideIndex].className +=" active";
    }

    function nextSlide(){
        slideIndex++;
        if(slideIndex>slides.length-1){
            slideIndex = 0;
        }
        showSlides(slideIndex);
    }
    // ova e za strelkite
    function currentSlide(n){
        clearInterval(slideInterval) //ova e za da go prekineme avtomatski da se mota apperently
        showSlides(n);
    }
    function changeSlide(n){
        slideIndex += n;
        if(slideIndex>slides.length-1){
            slideIndex = 0;
        }
        if(slideIndex<0){
            slideIndex = sldies.length-1;
        }
        showSlides(slideIndex);
    }
    
    window.onload = function(){
        showSlides(slideIndex) //ova za koa kje se vchita stranicata valjda
    };
//*****************del za da se ukluci modal koga kje klikneme na bilo koe mesto bna stranata
    let username_info = [];
    const modal = document.querySelector('.modal');
    const openModal = document.querySelectorAll('.open-button');
    const closeModal = document.querySelector('.close-button');

    openModal.forEach(button=>{
      button.addEventListener('click',()=>{
        modal.showModal();
      });
    });


    //**************del za registracija i za log in***************
    let isLoggedin = false;

    const userInfoList = JSON.parse(localStorage.getItem("userInfoList")) || [];
    // let userInfoList = [{email:'Marko',password:'pass123',username:'Bunte'},
    //                     {email:'bunte',password:'pass1234',username:'Bunteski'}]
                        
    function check(){
    const inputElement_email = document.querySelector('.js-input-modal_email');
    const inputElement_password = document.querySelector('.js-input-modal_password');
    
    let MailExists = false;
    let passExists = false;
    let m = 0;
    
    
    for(let i =0;i<userInfoList.length;i++){
      if(userInfoList[i].email === inputElement_email.value){
        console.log("mail authenticated");
        MailExists = true;    
        if(userInfoList[i].password === inputElement_password.value){
          passExists = true;
          console.log("pass authenticated")

        }
        m = i;
        break;      
      }
      
      
    }

    if(MailExists && passExists){
        isLoggedin = true;
        document.querySelector('.username_user').innerHTML = 'logged in: <br> '+userInfoList[m].username;
        
      modal.close();
    }else{
      if(MailExists){
      document.querySelector('.no_such_pass').innerHTML='no such password';
      }
      if(!MailExists){
        document.querySelector('.no_such_email').innerHTML='no such email';
      }
    }

    
  }

  function navigateUser(destiantion){
    if(isLoggedin){
        window.location.href = destiantion;
    }else{
        modal.showModal
    }
  }
  function LogIn(){
    if(isLoggedin){
        alert('you are already logged in');
    }else{
        modal.showModal();
    }
  }
  
  //*********************del za komentarite na order page****************








    
   
 //del kade shto gi zimame site infos za registracija

    function navigateUserRP(destiantion){
        
            window.location.href = destiantion;
    }
       
    function prevzemi(){
        // alert('func is beeing called')
    // Perform your validation and registration logic here
    const username_RPage = document.getElementById('usernameRpage').value;
    const email_RPage = document.getElementById('emailRpage').value;
    const password_RPage = document.getElementById('password_RPage').value;
    const confirmPassword_RPage = document.getElementById('confirm-passwordRPage').value;
    // alert('func is beeing called2')
    if(password_RPage !== confirmPassword_RPage) {
        alert('Passwords do not match.');
        
    }else{
    userInfoList.push({email:email_RPage,password:password_RPage,username:username_RPage});
    alert('Registration successful!');
    navigateUserRP('index.html');
    localStorage.setItem("userInfoList",JSON.stringify(userInfoList));
    
    }
};

//delot kade shto kje treba da gi zemam informaciite od
//cart listata i kje trteba da gi priakzham na [pslednata stranica
//**************final part***************** */
//current time: 1:31 am



  