document.getElementById('checkButton').addEventListener('click', function () {
        const name = document.getElementById('name').value;
        const result = document.getElementById('result');

        if (name) {
            const khodam = checkKhodam(name);
            result.innerHTML = `Khodam Anda adalah: <strong>${khodam}</strong>`;
        } else {
            result.innerHTML = '<span style="color: red;">Silahkan masukkan nama Anda!</span>';
        }
});

function checkKhodam(name) {
    const khodam = ['musang palembang', 'pandan terbang', 'bambu joget', 'luak jawa', 'hiu sucipto', 'kak gem', 'ambatron', 'mas anies', 'chef sigma', 'among us twerking', 'hamster tidur', 'batu mewing', 'badut jawa', 'tentara hitam', 'Mengkudu', 'ulet terbang', 'burung jalan', 'kuda kanjut', 'tobrut baik', 'paus terbang', 'kura kura api',  'Naga putih', 'fang wibu', 'dora si buta', 'tuyul mini', 'mario supermicro', 'spongebob gacor', 'naga emas', 'landak botak', 'curut sulawesi', 'pace opm', 'jarjit mewing', 'skibidi toilet', 'boneka beruang', 'kucing malas', 'pikachu mewing', 'rubah ekor sembilan', 'trenggiling sukabumi', 'rusa sigma', 'lontong lipet', 'koper segitiga', 'KODAM RARE ARYO PERANGSANG','kunti daster', 'pocong busuk', 'macan goyang', 'ronaldo kayang'];
    const index = Math.floor(Math.random() *khodam.length);
    return khodam[index];
}