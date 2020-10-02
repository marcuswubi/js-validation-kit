# Contribuindo

## Padrão de Commit:

`[ADD] #hashtag1,hashtag2 - Mensagem do commit.`


### Operação do Commit `[XXX]`

Operação do commit, deve ser uma das opções:
 

`[FIX]` -> Commit de correção via HOTFIX em produção.

`[ADD]` -> Adicionando uma feature ou arquivos de referência.

`[UPD]` -> Atualizando uma feature ou arquivos de referência.

`[DEL]` -> Removendo uma feature ou arquivos de referência.

`[SYNC]` -> Commit de utilidade quando é necessário sincronizar trabalhos.

`[MERGE]` -> Commit de merge, utilidade quando é necessário merge entre branch feature e development.

`[RELEASE]` -> Commit de versão, utilizado quando o development entra no master.
 
### HashTag do Commit `#hashtag1,hashtag2`
Uma forma de classificar os commits, pode ser o app ou módulo a que se refere, ou o motivo, ou a camada de aplicativo.

### Separador da Mensagem do Commit ` - `
Separador entre os metadados do commit e a mensagem

### Mensagem do Commit `Mensagem do commit.`
Mensagem descritiva representando de forma objetiva e clara a intenção daquele commit.


### Contribuindo Passo a Passo:

1. Faça um Fork!
2. Crie um branch de feature: `git checkout -b dev-feature`
3. Commit suas alterações de acordo com nosso padrão de commits: `git commit -m '[ADD] #hashtag - Commit message.'`
4. Envie o código para nuvem: `git push origin dev-feature`

*Lembre-se que temos um tratamento de `pre-push` hook para evitar enviar código fora de padrão.*

**Depois que o seu `pull request` for merged**, você pode deletar seu branch seu problemas.  
  
[Voltar](https://github.com/Acelera/rc-crud)  
