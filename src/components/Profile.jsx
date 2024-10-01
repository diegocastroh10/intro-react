import { useContext, useEffect } from 'react';
import { UserContext } from '../context/EJContext';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Profile() {
  const { userProfile, fetchUserProfile } = useContext(UserContext);

  useEffect(() => {
    fetchUserProfile(); // Obtener el perfil del usuario al montar el componente
  }, [fetchUserProfile]);

  if (!userProfile) {
    return <div>Cargando perfil...</div>; // Mensaje de carga mientras se obtiene el perfil
  }

  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{userProfile.name || 'Nombre del usuario'}</MDBCardTitle>
                    <MDBCardText>{userProfile.email || 'Correo del usuario'}</MDBCardText>
                    {/* Agrega más información del perfil aquí */}
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Ver más</MDBBtn>
                      <MDBBtn className="flex-grow-1">Cerrar sesión</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
