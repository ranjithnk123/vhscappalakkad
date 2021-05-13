      $("#submit-form").submit((e)=>{
          e.preventDefault()
          $.ajax({
              url:"https://script.google.com/macros/s/AKfycbxVdcyAZ0rPd-W4XC71tdoLekw7meGz4JGCOS8W/exec",
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