$(document).ready(function () {
    $(".Pilih1").hide();
    $(".Pilih2").hide();

    $("#btnPilih1").click(function () {
        $(".Pilih1").show(1000);
        $(".Pilih2").hide(500);
        $("#btnPilih1").addClass("active"); 
        $("#btnPilih2").removeClass("active");
    });

    $("#btnPilih2").click(function () {
        $(".Pilih2").show(1000)
        $(".Pilih1").hide(500);
        $("#btnPilih2").addClass("active"); 
        $("#btnPilih1").removeClass("active");
    });

    $("#selectPilih").change(function () {
        var npilih = $("#selectPilih").val();
        switch (npilih) {
            case "1":
                $(".Pilih1").show(1000);
                $(".Pilih2").hide(500);
                break;

            case "2":
                $(".Pilih2").show(1000);
                $(".Pilih1").hide(500);
                break;
            default:
                $(".Pilih1").hide();
                $(".Pilih2").hide();
                break;
        }
    });
});