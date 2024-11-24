document.getElementById('copyIP').onclick = function () {
    navigator.clipboard.writeText('spire-mc.com').then(function () {
        const button = document.getElementById('copyIP');
        button.innerHTML = '<i class="mx-2 fas fa-check"></i> Copied';
        button.disabled = true;

        setTimeout(() => {
            button.innerHTML = '<i class="mx-2 fas fa-copy"></i> Copy IP';
            button.disabled = false;
        }, 3000);
    }, function (err) {
        console.error('Could not copy IP: ', err);
    });
};