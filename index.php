<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Validaciones JAVASCRIPT</title>
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col">
                <table>
                    <thead>
                        <h1>Validaciones JAVASCRIPT</h1>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <label for="NombreCompleto">Nombre y Apellido</label>
                            </td>
                            <td>
                                <input type="text"id="NombreCompleto" name="NombreCompleto"><span id="respuestaNombreCompleto"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="Alias">Alias</label>
                            </td>
                            <td>
                                <input type="text"id="Alias" name="Alias"><span id="respuestaAlias"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="RUT">RUT</label>
                            </td>
                            <td>
                                <input type="text"id="RUT" name="RUT" maxlength="12"><span id="respuestaRUT"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="Email">Email</label>
                            </td>
                            <td>
                                <input type="email"id="Email" name="Email"><span id="respuestaEmail"></span>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="Region">Región</label>
                            </td>
                            <td>
                                <select name="Region" id="Region">
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label for="Comuna">Comuna</label>
                            </td>
                            <td>
                                <select name="Comuna" id="Comuna" disabled="true">
                                    <option value="0" selected>Seleccione primero su región</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col">
                <table>
                    <thead>
                        <th>
                            Rut Votante
                        </th>
                        <th>
                            Nombre y Apellido
                        </th>
                    </thead>
                </table>
            </div>
        </div>
    </div>

    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-3.6.0.min.js"></script>
    <script src="js/main.js"></script>
</body>
</html>