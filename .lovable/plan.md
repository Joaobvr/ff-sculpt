

## Atualizar imagem de compartilhamento (OG Image)

Quando o link da página é compartilhado no WhatsApp, redes sociais etc., a imagem exibida é definida pela meta tag `og:image` no `index.html`, que atualmente aponta para `/og-image.jpg`.

### Plano

1. **Copiar a foto da Dra. Isabella** (`src/assets/doctor-portrait.jpg`) para `public/og-image.jpg`, substituindo a imagem atual de compartilhamento.

2. **Ajustar as meta tags** no `index.html` se necessário (já apontam para `/og-image.jpg`, então provavelmente não será preciso alterar).

> **Nota:** Após a atualização, pode levar algum tempo para o WhatsApp e outras plataformas atualizarem o cache da imagem antiga. Ferramentas como o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) podem forçar a atualização.

