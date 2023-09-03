document.addEventListener("DOMContentLoaded", function () {
    const absensiForm = document.getElementById("absensiForm");
    const absensiData = document.getElementById("absensiData");

    absensiForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nama = document.getElementById("nama").value;
        const hadirYa = document.getElementById("hadir-ya").checked;
        const hadirTidak = document.getElementById("hadir-tidak").checked;
        const alasan = document.getElementById("alasan").value;

        if (!hadirYa && !hadirTidak) {
            alert("Silakan pilih 'Ya' atau 'Tidak' untuk kehadiran.");
            return;
        }

        const hadirText = hadirYa ? "Ya" : "Tidak";

        const absensiItem = document.createElement("div");
        absensiItem.className = "absensi-item";
        absensiItem.innerHTML = `
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Hadir:</strong> ${hadirText}</p>
            <p><strong>Alasan Ketidakhadiran:</strong> ${hadirYa ? "-" : alasan}</p>
        `;

        absensiData.appendChild(absensiItem);

        // Reset form
        absensiForm.reset();
    });
});
