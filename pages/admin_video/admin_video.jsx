import AdminHeader from '../../components/admin_header/admin_header'
// import AddNewsForm from '../../components/add_news_form/add_news_form'


function AdminVideo() {
    const token = window.localStorage.getItem('token') ? JSON.parse(window.localStorage.getItem('token')).token : ""
    if(token != 'tkti_admin777'){
        window.location = '/login'
    }
    return (
        <>
            <AdminHeader />
            {/* <AddNewsForm /> */}
        </>
    );
}

export default AdminVideo;
