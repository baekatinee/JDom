[].forEach.call(document.querySelectorAll('input[type="tel"]'), function (input) {
   let keyCode;
   function mask(event) {
     event.keyCode && (keyCode = event.keyCode);
     let pos = this.selectionStart;
     if (pos < 3) event.preventDefault();
     let matrix = '+375 (__) ___-__-__',
       i = 0,
       def = matrix.replace(/\D/g, ''),
       val = this.value.replace(/\D/g, ''),
       new_value = matrix.replace(/[_\d]/g, function (a) {
         return i < val.length ? val.charAt(i++) || def.charAt(i) : a
       });
     i = new_value.indexOf('_');
     if (i != -1) {
       i < 5 && (i = 3);
       new_value = new_value.slice(0, i)
     }
     var reg = matrix.substr(0, this.value.length).replace(/_+/g,
       function (a) {
         return '\\d{1,' + a.length + '}'
       }).replace(/[+()]/g, '\\$&');
     reg = new RegExp('^' + reg + '$');
     if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
     if (event.type == 'blur' && this.value.length < 5) this.value = ''
   }
   input.addEventListener('input', mask, false);
   input.addEventListener('focus', mask, false);
   input.addEventListener('blur', mask, false);
   input.addEventListener('keydown', mask, false);
 });
 
 var input = document.querySelectorAll('.date_bth')[0];
   
 function dateInputMask(elm) {
   elm.addEventListener('keypress', function(e) {
     if(e.keyCode < 47 || e.keyCode > 57) {
       e.preventDefault();
     }
     
     var len = elm.value.length;
     
     // If we're at a particular place, let the user type the slash
     // i.e., 12/12/1212
     if(len !== 1 || len !== 3) {
       if(e.keyCode == 47) {
         e.preventDefault();
       }
     }
     
     // If they don't add the slash, do it for them...
     if(len === 2) {
       elm.value += '/';
     }
 
     // If they don't add the slash, do it for them...
     if(len === 5) {
       elm.value += '/';
     }
   });
 };
   
 dateInputMask(input);
 
 document.querySelector('.children').addEventListener('keyup', function(){
   this.value = this.value.replace(/[^а-яё\s]/gi, '');
 });
 document.querySelector('.parent').addEventListener('keyup', function(){
   this.value = this.value.replace(/[^а-яё\s]/gi, '');
 });
 
 "use strict"
 const form = document.getElementById('form');
 form.addEventListener('submit', formSend);
 let popap = document.querySelector('#popap');
 async function formSend(e){
   e.preventDefault();
 
   let error = formValidate(form);
   let formData = new FormDataEvent(form);
   if(error === 0){
     //form.classList.add('_sending');
     let response = await fetch('sendmail.php', {
       method: 'POST',
       body: formData
     });
     if(response.ok){
       /*let result = await response.json();
       alert(result.message);
       form.reset();*/
       //popap.classList.add(popap-active);
       //form.classList.remove('_sending');
       popapOpen(popap);
     }else{
       alert("Ошибка");
       //form.classList.remove('_sending');
     }
   }
 }
 function formValidate(form){
   let error = 0;
   let formReq = document.querySelectorAll('._req');
   for (let index = 0; index < formReq.length; index++){
     const input = formReq[index];
     formRemoveError(input);
     if(input.value === ''){
       formAddError(input);
       error++;
     }
   }
 }
 function formAddError(input){
   input.parentElement.classList.add('_error');
   input.classList.add('_error');
 }
 function formRemoveError(input){
   input.parentElement.classList.remove('_error');
   input.classList.remove('_error');
 }