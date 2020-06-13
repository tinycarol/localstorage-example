let userInfo = document.getElementById('user-info')
userInfo.innerText = `My name is ${localStorage.getItem('name')}`;

document.getElementById('save').onclick = () => {
	localStorage.setItem('name', document.getElementById('name').value);
	userInfo.innerText = `My name is ${localStorage.getItem('name')}`;
}