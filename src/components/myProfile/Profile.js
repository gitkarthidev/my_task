import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import ProfileList from "./ProfileList";
const Profile = (props) => {
  const { getData } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ClipLoader
            color={"gray"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <ProfileList getData={getData} />
      )}
    </div>
  );
};

export default Profile;
