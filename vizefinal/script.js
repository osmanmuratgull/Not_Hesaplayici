function toggleVize2Input() {
    var vize2Container = document.getElementById('vize2Container');
    var hasVize2 = document.getElementById('hasVize2').checked;
    vize2Container.style.display = hasVize2 ? 'block' : 'none';
  }
  
  function calculateAverage() {
    var vize1 = parseFloat(document.getElementById('vize1').value);
    var vize2Input = document.getElementById('vize2Input');
    var vize2 = parseFloat(vize2Input.value);
    var final = parseFloat(document.getElementById('final').value);
  
    var vize1Weight, vize2Weight, finalWeight;
    var average;
  
    if (vize2Input && vize2Input.parentElement.style.display !== 'none' && !isNaN(vize2)) {
      vize1Weight = 0.2;
      vize2Weight = 0.2;
      finalWeight = 0.6;
      average = (vize1 * vize1Weight) + (vize2 * vize2Weight) + (final * finalWeight);
    } else {
      vize1Weight = 0.4;
      finalWeight = 0.6;
      average = (vize1 * vize1Weight) + (final * finalWeight);
    }

  
    document.getElementById('result').innerText = `Ortalama: ${average.toFixed(2)}`;
  }
  