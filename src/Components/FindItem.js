import React,{useState} from 'react'
import "../Stylesheet/FindItem.css"

 function FindItem() {

    const [show, setShow] = useState(false);
    const clickMe = () => {
        setShow(!show);
    }

    return (
        <>
            <div className="containerF" style ={{height: show ? "70%" : "60%"}}>
                <div className="text">
                    <h2>Sizin için uygun olan işi veya stajı bulun</h2>
                </div>
                <div className="items">
                    <h6>ÖNERİLEN ARAMALAR</h6>
                    <div className="list">
                    <ul>
                        <li>Mühendislik</li>
                        <li>İş Geliştirme</li>
                        <li>Finans</li>
                        <li>Yönetici Asistanlığı</li>
                        <li>Pekande Uzmanı</li>
                        <li>Müşteri Hizmetleri</li>
                        <li>Operasyon</li>
                        <li>Bilgi Teknolojisi</li>
                        <li>İnsan Kaynakları</li>
                        <li>Sağlık Hizmetleri</li>
                        <li>Program ve Proje Yönetimi</li>
                        <li>Muhasebe</li>
                        <div className='secondry' style ={{visibility: show ? "visible" : "hidden"}}>
                        <li>Satış</li>
                        <li>Pazarlama</li>
                        <li>Sanat ve Tasarım</li>
                        <li>Hukuk</li>
                        <li>Eğitim</li>
                        <li>İdari</li>
                        <li>Destek</li>
                        <li>Satın Alma</li>
                        </div>
                    </ul>
                    </div>
                    <button onClick={clickMe} style ={{top: show ? "320px" : "260px"}} >{show ? "Daha az göster ▲" : "Daha fazla göster ▼"}</button>
                </div>
                <div className='hiring' style={{marginTop:show ? "38%" : "30%"}}>
                    <h3>Milyonlarca kişinin iş ilanınızı görmesi için işinizi yayınlayın</h3>
                    <button>İş ilanı yayınlayın</button>
                </div>
            </div>
        </>
    )
}

export default FindItem