      $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbyPG-aB4e-y2CD48yDMlo3cBQWI7Sl0_9Df8J2wYw/exec",
              data:$("#submit-form").serialize(),
              method:"post",
              success:function (response){
                  alert("Successfully Submitted")
                  document.getElementById("submit-form").reset();
                  //window.location.reload()
                  //window.location.href="./index.html"
              },
              error:function (err){
                  alert("Something Error")
  
              }
          })
      })