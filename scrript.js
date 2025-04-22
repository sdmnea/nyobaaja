let layar = document.getElementById("layar");

    function tambahAngka(angka) {
      layar.value += angka;
    }

    function tambahOperator(operator) {
      if (layar.value === "") return;
      const terakhir = layar.value[layar.value.length - 1];
      if (['+', '-', '*', '/'].includes(terakhir)) return;
      layar.value += operator;
    }

    function hapus() {
      layar.value = "";
    }

    function hapusSatu() {
      layar.value = layar.value.slice(0, -1);
    }

    function hitung() {
      try {
        layar.value = eval(layar.value);
      } catch (e) {
        layar.value = "Error";
      }
    }