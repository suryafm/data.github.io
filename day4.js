<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple Calculator</title>
  <style>
    input[type="button"] {
      width: 50px;
      height: 50px;
      font-size: 20px;
    }
  </style>
</head>
<body>
  <h2>Simple Calculator</h2>
  <input type="text" id="display" disabled><br>

  <input type="button" value="1" onclick="addToDisplay('1')">
  <input type="button" value="2" onclick="addToDisplay('2')">
  <input type="button" value="3" onclick="addToDisplay('3')">
  <input type="button" value="+" onclick="addToDisplay('+')"><br>

  <input type="button" value="4" onclick="addToDisplay('4')">
  <input type="button" value="5" onclick="addToDisplay('5')">
  <input type="button" value="6" onclick="addToDisplay('6')">
  <input type="button" value="-" onclick="addToDisplay('-')"><br>

  <input type="button" value="7" onclick="addToDisplay('7')">
  <input type="button" value="8" onclick="addToDisplay('8')">
  <input type="button" value="9" onclick="addToDisplay('9')">
  <input type="button" value="" onclick="addToDisplay('')"><br>

  <input type="button" value="C" onclick="clearDisplay()">
  <input type="button" value="0" onclick="addToDisplay('0')">
  <input type="button" value="=" onclick="calculate()">
  <input type="button" value="/" onclick="addToDisplay('/')"><br>

  <script>
    function addToDisplay(value) {
      document.getElementById('display').value += value;
    }

    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    function calculate() {
      try {
        var result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
      } catch (error) {
        document.getElementById('display').value = 'Error';
      }
    }
  </script>
</body>
</html>
