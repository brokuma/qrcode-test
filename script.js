var txtText = "";

$(".txtText").keyup(function () {
  txtText = $(".txtText").val();
  if (txtText !== "" && txtText.length >= 3) {
    $(".btn-gen").prop("disabled", false);
    $(".btn-rel").prop("disabled", false);
  } else {
    $(".btn-gen").prop("disabled", true);
    $(".btn-rel").prop("disabled", true);
  }
});

$(".btn-gen").click(function () {
  txtText = $(".txtText").val();
  $(".qrcode").html("");
  $(".qrcode").qrcode({
    text: txtText,
    width: 75,
    height: 75,
  });
  clearField();
});

$(".btn-rel").click(function () {
  $(".btn-gen").prop("disabled", true);
  $(".btn-rel").prop("disabled", false);
  $(".txtText").prop("disabled", false);
  $(".qrcode").html("");
  $(".txtText").val("");
});

function clearField() {
  $(".txtText").val("");
  $(".btn-gen").prop("disabled", true);
  $(".txtText").prop("disabled", true);
}
