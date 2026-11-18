# Familias

Sistema separado da JMarySystems, no mesmo padrão do Controle de Acesso.
Compartilha o mesmo banco Supabase dos outros sistemas.

## Banco

Tabela principal: `arm_familias`.

## Permissões

As ações de cadastrar, editar e excluir respeitam a matriz do **Controle de Acesso**
(módulo `familia`), tanto na tela quanto nas políticas do banco.

## Rodar localmente

```bash
python -m http.server 5500
```
