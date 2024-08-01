

export function openSidebar() {
    const app = document.getElementById("sidebar");
    app?.classList.toggle('sidebar-open')
    changeBtnOpenToCLosed()
}

export function changeBtnOpenToCLosed() {
    const btn = document.getElementById('btn-open')
    btn?.classList.toggle('btn-close-sideber')
}


export function activeItem(id:string) {
    const p = document.querySelectorAll('a')
    p.forEach(item =>{
        item.classList.remove('active-item');
    })
    const app = document.getElementById(id);
    app?.classList.toggle('active-item')


}

