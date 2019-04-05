<?php

$nombre = $_POST['nombre'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];
$para = 'nachoecha@gmail.com';
$titulo = $_POST['asunto'];
$header = 'From: ' . $email;
$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Asunto:\n $asunto\n Mensaje:\n $mensaje";

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