
$scope.getTipoTramite = function() {
        var urlTram = "Varios/GetTiposTramites"
        const options = {
            method: "GET",
            idPrestador: $rootScope.user.prestador_id,
            accessToken: $rootScope.user.accessToken,
            IdUsuario: $rootScope.user.user_id
        };
        $gameroad.api("", urlTram, options).then(
            function(response) {
                if (response.success) {
                    if (response.responsedata.length > 0) {
                        response.responsedata.forEach(tramiteItem => {
                            $scope.listaTramites.tramites.push({
                                id: tramiteItem.codigo,
                                descripcion: tramiteItem.nombre
                            });
                        });
                    }
                } else {
                    console.log('Error al obtener tipos de tramites');
                }
            },
            function(response) {
                console.log("ERROR | Personal => obtener Tipo Tramite: ", response);
            }
        );
   }
