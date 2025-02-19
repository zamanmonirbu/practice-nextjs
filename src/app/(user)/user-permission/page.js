
const UserPermission = ({ user={name:"monir"} }) => {
    if (!user) {
        return <div>Please log in to access this page.</div>;
    }

    if (!user.hasAccess) {
        return <div>You do not have permission to view this page.</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <p>You have access to this page.</p>
        </div>
    );
};

export default UserPermission;