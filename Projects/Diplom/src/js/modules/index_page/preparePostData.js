
const preparePostData = (selectorForm, url) => {
    const form = document.querySelector(selectorForm),
        overlay = document.querySelector('.overlay'),
        okMsg = document.querySelector('.form-result-ok'),
        errorMsg = document.querySelector('.form-result-error');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let fdata = new FormData(form);
        let data = {};
        fdata.forEach((value, key) => {
            if (value !== undefined && value !== "") {
                data[key] = value;
            }
        });
        let json = JSON.stringify(data);

        let params = {
            method: 'POST',
            body: json,
            headers: {
                "Content-Type": "application/json",
                "Content-Length": json.length.toString(),
            }
        };
        fetch(url, params)
            .then(res => {
                if (res.status == '200') {
                    onOk(res);
                } else {
                    onError(res);
                }
            })
            .catch(() => onError());

        let onOk = () => {
            overlay.style.display = 'flex';
            okMsg.style.display = "block";
        };
        let onError = () => {
            overlay.style.display = 'flex';
            errorMsg.style.display = "block";
        };
    });
};

export default preparePostData;