Como atualizar contatos, endereço e imagens no site

1) Telefone/WhatsApp
- Edite os números em `src/components/Hero.tsx` (link do botão WhatsApp) e em `src/components/Footer.tsx` (tel link).

2) Endereço e horário
- Atualize os campos em `src/components/Footer.tsx` (placeholders atualmente: (confirmar endereço), horário).

3) Logo e imagens
- Coloque imagens na pasta `src/assets/` e atualize as referências no componente `src/components/Gallery.tsx`.

4) Teste local
- Rode `npm run dev` para verificar alterações em tempo real.
- Rode `npm run build` e `npm run start` para simular produção.

5) Deploy
- Commit e push para `main` (ou `gh-pages`, dependendo da configuração atual do Pages). A Action fará o deploy automático.
