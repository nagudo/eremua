<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = 'nachoecha@gmail.com';
$titulo = $_POST['asunto'];
$header = 'From: ' . $email;
//$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Asunto:\n $asunto\n Mensaje:\n $mensaje";
$msjCorreo = '<html><body style="background: #f5f5f5; font-family:Arial, serif">';
$msjCorreo .= '<table width="100%" border="0" cellspacing="10" cellpadding="0" style="background: white;">';
$msjCorreo .= '<tbody>';
$msjCorreo .= '<tr>';
$msjCorreo .= '<td width="25%"> Nombre: </td>';
$msjCorreo .= '<td> $nombre </td>';
$msjCorreo .= '</tr>';
$msjCorreo .= '<tr>';
$msjCorreo .= '<td> E-mail: </td>';
$msjCorreo .= '<td> $email </td>';
$msjCorreo .= '</tr>';
$msjCorreo .= '<tr>';
$msjCorreo .= '<td> Asunto: </td>';
$msjCorreo .= '<td> $asunto </td>';
$msjCorreo .= '</tr>';
$msjCorreo .= '<tr>';
$msjCorreo .= '<td style="vertical-align: top;"> Mensaje: </td>';
$msjCorreo .= '<td> $mensaje </td>';
$msjCorreo .= '</tr>';
$msjCorreo .= '</tbody>';
$msjCorreo .= '</table>';
$msjCorreo .= '</body></html>';

if ($_POST['submit'])
{
	if (mail($para, $titulo, $msjCorreo, $header))
	{
		?>
		<script type="text/javascript" language="javascript">// <![CDATA[
			alert('Mensaje enviado, muchas gracias.');
			//window.location.href = 'http://www.eremua.com';
		// ]]></script>
		<?php

	}
	else
	{
		?>
		<script type="text/javascript" language="javascript">// <![CDATA[
			
alert('No se ha podido realizar el envio, pruebe de nuevo.');

			//window.location.href = 'http://www.eremua.com';
		// ]]></script>
		<?php
	}
}