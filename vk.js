vkBridge.send("VKWebAppInit", {});


vkBridge.send('VKWebAppShowBannerAd', {
  banner_location: 'bottom'
  })
 .then((data) => { 
    if (data.result) {
      // Баннерная реклама отобразилась
    }
  })
  .catch((error) => {
    // Ошибка
    console.log(error);
  });