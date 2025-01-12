async function loadImage(ipUrl) {
    try {
      const response = await fetch(ipUrl, {
        mode: 'cors',
      });
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      document.querySelector('img').src = imgUrl;
      document.querySelector('button').style.display = 'none';
    } catch (error) {
      console.error('Image loading failed:', error);
    }
  }

  const ipUrl = 'https://psychowords.com/image';
  document.getElementById('changeImage').addEventListener('click', loadImage(ipUrl));