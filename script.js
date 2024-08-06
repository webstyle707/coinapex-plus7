function url() {
    fbq("track", "Purchase");
    fbq("track", "SubmitApplication");
    location.href = "https://chat.whatsapp.com/DEwTmeThw93BqGjowUxCfE";
  }


  const bg1 = document.getElementById('bg1').style
  const bg2 = document.getElementById('bg2').style
  const bg3 = document.getElementById('bg3').style
  const bg4 = document.getElementById('bg4').style
  const bg5 = document.getElementById('bg5').style
  const bg6 = document.getElementById('bg6').style
  const hoverbg1 = ()=>{
    bg1.transform = "scale(1.05)"
    bg1.transition = "all 0.8s ease"
  }

   const leavehoverbg1 = ()=>{
    bg1.transform = "scale(1)"
    bg1.transition = "all 1s ease"
  }

  const hoverbg2 = ()=>{
    bg2.transform = "scale(1.05)"
    bg2.transition = "all 0.8s ease"
  }

   const leavehoverbg2 = ()=>{
    bg2.transform = "scale(1)"
    bg2.transition = "all 1s ease"
  }


  const hoverbg3 = ()=>{
    bg3.transform = "scale(1.05)"
    bg3.transition = "all 0.8s ease"
  }

   const leavehoverbg3 = ()=>{
    bg3.transform = "scale(1)"
    bg3.transition = "all 1s ease"
  }

  const hoverbg4 = ()=>{
    bg4.transform = "scale(1.05)"
    bg4.transition = "all 0.8s ease"
  }

   const leavehoverbg4 = ()=>{
    bg4.transform = "scale(1)"
    bg4.transition = "all 1s ease"
  }

  const hoverbg5 = ()=>{
    bg5.transform = "scale(1.05)"
    bg5.transition = "all 0.8s ease"
  }

   const leavehoverbg5 = ()=>{
    bg5.transform = "scale(1)"
    bg5.transition = "all 1s ease"
  }

  const hoverbg6 = ()=>{
    bg6.transform = "scale(1.05)"
    bg6.transition = "all 0.8s ease"
  }

   const leavehoverbg6 = ()=>{
    bg6.transform = "scale(1)"
    bg6.transition = "all 1s ease"
  }

let menu = document.getElementById('menu').style
let styledisplaybgopacity = document.getElementById("styledisplaybgopacity").style
  const showmenu = ()=>{
    menu.transition = "all 0.6s ease"
    styledisplaybgopacity.display = "block"
    menu.right = "0%"
    styledisplaybgopacity.transition = "all 3s ease"
    styledisplaybgopacity.background = "black"
    styledisplaybgopacity.opacity = "60%"
  }


  const hidemenu = ()=>{
    styledisplaybgopacity.opacity = "0%"
    styledisplaybgopacity.background = "white"
    menu.transition = "all 0.6s ease"
    menu.right = "-100%"
  }