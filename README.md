# SOLID - Os 5 Princípios para as Boas Práticas da POO

Estudo de SOLID em Java

## O que é SOLID?

Os princípios SOLID devem ser aplicados para se obter os benfícios de Orientação a Object.

- Código mais fáceis de se manter, de serem adaptados e de se ajustaremas mudanças
- Código testáveis e de fácil entendimento
- Código que fornecem o máximo de reaproveitamento
- Aplicações com cicle de vida maiores

### Os princípios são?

- SRP - Single Responsibility Principle (Princípio da Responsabilidade Única)
- OCP - Open/Closed Principle (Princípio Aberto/Fechado)
- LSP - Liskov Substitution Principle (Princípio de Substituição de Liskov)
- ISP - Interface Segregation Principle (Princípio da Segregação de Interface)
- DIP - Dependency Inversion Principle (Princípio da Inversão de Dependência)


# Projeto SRP

Uma classe deve ter apenas um motivo para mudar, ou em outras palavras, uma classe deve ter uma e apenas uma responsabilidade.

# Projeto OCP

Uma enidade de software, tais como classes, módulos, funções, etc, devem sempre estar abertas para extensões, mas fechadas para modificações.

# Projeto LSP

Se q(x) é uma propriedade demonstrável dos objetos x de tipo T. Então q(y) deve ser verdadeiro para objetos y do tipo S onde S é um subtipo de T.

# Projeto ISP

Clientes não devem ser forçados a depender de métodos que não usam. Muitas interfaces específicas são melhores do que uma única interface.

# Projeto DIP

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações. Dependa de uma abstração e não de uma implementação. Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações.