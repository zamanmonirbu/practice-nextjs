import AdminFooter from "../components/admin-footer/page";

const AdminLayout = ({children}) => {
    return (
        <div>
            <AdminFooter/>
            {children}
        </div>
    );
};

export default AdminLayout;