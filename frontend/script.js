async function loadImage(ipUrl) {
    try {
      const response = await fetch(ipUrl, {
        mode: 'cors',
      });
      const blob = await response.blob();
      const imgUrl = URL.createObjectURL(blob);
      document.querySelector('img').src = imgUrl;
      document.querySelector('img').style.display = 'block';
      document.getElementById('text-center').style.display = 'none';
      document.querySelector('pre').style.display = 'none';
      document.querySelector('button').style.visibility = 'hidden';
    } catch (error) {
      console.error('Image loading failed:', error);
    }
  }

  const ipUrl = 'https://psychowords.com/image';
  document.getElementById('changeImage').addEventListener('click', ()=>loadImage(ipUrl));