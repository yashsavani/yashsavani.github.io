---
title: "Propositional Logic"
date: 2021-06-14T10:49:46+05:30
draft: true
---

## Introduction

In this post, we are going to discuss one of the most fundamental of all ideological concepts: logic.

Galileo claimed, “Mathematics is the language with which God has written the universe”. If we accept this, then to understand the universe we must first learn mathematics. But mathematics itself is a refinement of the abstractions and patterns surrounding us. We articulate this refinement through deductive arguments built upon irrefutable axioms, both expressed through the language of logic. Thus, learning logic is the first step to understanding the universe.

Logic is also an important tool for those of us with more utilitarian objectives. Before we can manipulate, innovate, or create, we need to understand the laws constraining our actions. These laws are also often expressed in the language of logic. Some subjects besides the natural sciences with such laws are psychology, sociology, economics, philosophy, and computer science. Moreover, our most innovative ideas and products exploit logical patterns in these laws to maximize utility. In this way, learning logic serves both the aesthetic reader and the utilitarian one.

## History and Scope

Logic has had a long and illustrious history. It was first developed by Aristotle under the moniker "analytics". After centuries of refinement, it took on its modern form in the 20th century under the works of several western scholars including Gottlob Frege, Charles Babbage, Augustus De Morgan, and George Bool. Several logicians have dedicated their entire lives to the study of logic. A few notable examples are Bertrand Russell, Alfred North Whitehead, Kurt Friedrich Gödel, and Georg Cantor.

The intricacies of logic can become quite complex. So I will avoid going too far down the logic rabbit hole. Instead, we will focus on learning only the concepts required to decipher the most common mathematical proofs. If you find your interest piqued and want to dive deeper into the captivating world of logic, I have provided some links at the end of this post that should help guide your journey.

There are many formulations of logic out there. However, one of the most simple and foundational of them all is propositional or zeroth-order logic. We can eventually establish higher-order forms of logic based on this foundation. But in this post, we will constrain our exploration to the concepts of propositional logic.

## Propositions

The atoms of logic are declarative statements that must take on a unique truth-value. That is, statements that must be either True or False, but not both. These statements are called propositions. We usually use propositional variables ($p, q,$ or $r$) to stand in as replacements for these propositions when we are making deductions about them. Some examples of propositions are:

- All men are mortal.
- Socrates is a man.
- $2 + 2 = 4.$
- $2 + 2 = 5.$ (Even though this statement is False, it is still a valid proposition).
- The sun will rise tomorrow.
- God exists. (Even if we do not know the truth-value of the statement, the fact that it can have a unique truth-value is sufficient for it to qualify as a proposition).
- $x + 4 = 5.$ (Even though we do not know what the value for $x$ is, this is still a valid proposition since it can take on a unique truth-value for a given $x$).

Some non-examples of propositions are:

- Where are you going? (Interrogative statements are not propositions).
- Watch out! (Exclamatory statements are not propositions)
- Jump up and down. (Imperative sentences are not propositions)
- This statement is False. (This one is a little tricky, but it is not a proposition because it cannot take on a unique truth-value. If it is True, then it is False, and if it is False, then it is True. We call such statements paradoxical statements).

## Logical Connectives and Expressions

To make the language of logic more useful, we introduce the concept of a logical connective or a logical operator. A logical connective modifies or combines a set of propositions into a new declarative statement. We call this statement a propositional expression. Since propositional expressions are just complex propositions, and a single proposition can be considered the simplest propositional expression, we use the two terms interchangeably. A series of deterministic rules define the outcome of applying a logical connective to a set of propositions. These rules determine the truth-value of the resulting expression based on the truth-values of the input propositions. If we continue to apply connectives to the resulting expressions, we get bigger, more complex expressions. In this way, we can create an entire algebra (or language) based on propositional expressions combined through logical connectives. This kind of algebra is the basis for many programming languages, including most Lisp-based languages. Note though, that in these programming languages the expressions may not only be propositional. They can be integral, floating-point, or almost any other type.

# Arity

The arity of a logical connective is the number of propositions the connective combines or modifies. We call connectives that modify a single proposition unary connectives, connectives that combine two propositions binary connectives, connectives that combine three propositions ternary connectives, and so on. Beyond three, we usually call propositions that modify $n$ propositions, where $n > 3$, an $n$-ary connective.

## Truth Tables

There are $2^n$ possible permutations of truth-values or states that $n$ propositions can take. We call a table where each row corresponds to a potential state and each column corresponds to a particular expression a truth table. The value for a given row and column is the truth-value that the expression corresponding to that column takes for the state corresponding to that row.

Propositional expressions composed of the same propositions, and with identical truth-values for every state, are considered equivalent expressions. In other words, expressions are equivalent if their truth tables are identical. We use the symbols $\equiv$, $\Leftrightarrow$, iff, and "if and only if" to express the equivalence of expressions.

We will now introduce some of the most common and important logical connectives used in mathematics.

## Negation (NOT)

Negation is a unary logical connective that reverses the truth-value of a proposition. That is, if the proposition is True, the negation of the proposition is False, and if the proposition is False, the negation of the proposition is True. Some of the symbols used to notate negation are $\lnot p$, NOT $p$, $\sim p$, and $\bar p$, where $p$ is an arbitrary proposition.

### Formally

Let $p$ be an arbitrary proposition. Then $\lnot p$ is defined as

$$
    \lnot p = \begin{cases}\text{True,} &\quad\text{if }p\text{ is False} \\ \text{False,} &\quad\text{if }p\text{ is True}\end{cases}.
$$

The truth table describing the operation of the negation connective on an arbitrary proposition $p$ is:

| $p$ | $\lnot p$ |
|:---|:---:|
| True | False |
| False | True |

### Examples

- $p =$ "It is raining."
$\bar p = $ "It is not raining."
- $p = ``2+2=4."$
$\bar p = ``2+2\not=4"$.

## Identity (Parenthesis)

The identity is a unary logical connective that does not change the truth-value proposition at all. That is, if the proposition is True, the identity of the proposition is also True, and if the proposition is False, the identity of the proposition is also False. Some of the symbols used to notate the identity are $\text{id }p$, and $(p)$, where $p$ is an arbitrary proposition. While the identity does seem like a useless connective, it comes in handy when organizing propositional expressions with multiple connectives. Its parenthetical form is often used to disambiguate the precedence or order in which the connectives are applied.

## Conjunction (AND)

The conjunction is a binary logical connective that results in an expression that is True if and only if both propositional arguments are also True. Some of the symbols used to notate conjunction are $p \land q$, and $p$ AND $q$, where $p$ and $q$ are arbitrary propositions.

### Formally

Let $p$ and $q$ be arbitrary proposition. Then the truth table for the expression $p \land q$ is given by:

| $p$ | $q$ | $p \land q$ |
|:---|:---|:---:|
| False | False | False |
| False | True | False |
| True | False | False |
| True | True | True |

### Examples

- $p = $ "It is sunny outside."
$q = $ "We go for a run."
$p \land q = $ "It is sunny outside, and we go for a run."
- $p = ``x+y=4."$
$q = ``y=0."$
$p \land q = ``x+0=4."$

## Inclusive Disjunction (OR)

Inclusive disjunction is a binary logical connective that results in an expression that is True if any of the propositional arguments are True. Only if both propositional arguments are False, then the resulting propositional expression is also False. Some of the symbols used to notate inclusive disjunction are $p \lor q$, and $p$ OR $q$, where $p$ and $q$ are arbitrary propositions.

Note that in English the inclusivity of the disjunction is usually implied from context. That is, the statement "You can have the brownie, or you can have the cake" usually implies that you cannot have both the brownie and the cake. Therefore, the "or" in this statement does not correspond to the inclusive disjunction (It corresponds to the exclusive disjunction described below). On the other hand, the statement "To get exercise, you can do cardio or you can lift weights" implies that you can get exercise by doing either cardio, or by lifting weights, or by doing both. In this case, the "or" in the statement does correspond to the inclusive disjunction.
### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expression $p \lor q$ is given by:

| $p$ | $q$ | $p \lor q$ |
|:---|:---|:---:|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | True |

## Exclusive Disjunction (XOR)

Exclusive disjunction is a binary logical connective that results in an expression that is True if and only if both the propositional arguments are different from each other. Some of the symbols used to notate exclusive disjunction are $p \oplus q$, and $p$ XOR $q$, where $p$ and $q$ are arbitrary propositions.
### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expression $p \oplus q$ is given by:

| $p$ | $q$ | $p \oplus q$ |
|:---|:---|:---:|
| False | False | False |
| False | True | True |
| True | False | True |
| True | True | False |

### Examples

- $p = $"You can eat the brownie."
$q = $"You can eat the cake."
$p \oplus q = $ "You can either eat the brownie, or you can eat the cake, but not both."

## Implication / Conditional (If, then)

Implication or the conditional is a binary logical connective that results in an expression that is only False if the first proposition is True and the second proposition is False. Some of the symbols used to notate implication are $p \to q$, $p \Rightarrow q$, $p$ IMPLIES $q$, and "if $p$, then $q$,"  where $p$ and $q$ are arbitrary propositions. For the expression $p \to q$, $p$ is called the **antecedent**, and $q$ is called the **consequent**.

The conditional is one of the most common and intuitive ways to model cause and effect. The cause is usually represented by the antecedent, and the effect is represented by the consequent. However, note that the expression $p \to q$ is apathetic to the truth-value of the consequent if the antecedent evaluates to False. That is, the cause for the effect is not necessarily unique. As an example, let $p =$"I am hungry" and $q = $"I eat cake." Then $p \to q$ corresponds to "If I am hungry, then I eat cake." $p \to q$ is still True even when "I am not hungry, and I eat cake" because $p \to q$ does not tell us anything about the case where "I am not hungry."

### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expressions $p \to q$, $q \to p$,  $(\lnot p) \to (\lnot q)$, and $(\lnot q) \to (\lnot p)$ are given by:

| $p$ | $q$ | $p \to q$ | $q \to p$ | $(\lnot p) \to (\lnot q)$ | $(\lnot q) \to (\lnot p)$ |
|:---|:---|:---:|:---:|:---:|:---:|
| False | False | True | True | True | True |
| False | True | True | False | False | True |
| True | False | False | True | True | False |
| True | True | True | True | True | True |

### Inverses, Converses, and Contrapositives

If we examine the truth table of the implication connective, we see that it is not **symmetric**. That is, we cannot swap the role of the antecedent and the consequent without changing the entries of the truth table.

$$
  p \to q \not \equiv q \to p.
$$

We refer to $q \to p$ as the converse of $p \to q$. It is a common logical fallacy to assume that implication and its converse are equivalent, and it is the basis for several mathematical proof errors.

Furthermore, again by examining the truth table, we can deduce that negating the propositional arguments of the implication is not equivalent to the implication itself.

$$
    p \to q \not \equiv (\lnot p) \to (\lnot q)
$$

We refer to $(\lnot p) \to (\lnot q)$ as the inverse of $p \to q$.

However, the truth table columns for $p \to q$ and $(\lnot q) \to (\lnot p)$ are the same. and so they are indeed equivalent.

$$
    p \to q \equiv (\lnot q) \to (\lnot p)
$$

We refer to $(\lnot q) \to (\lnot p)$ as the contrapositive of $p \to q$. Often when we are  trying to show that $p \to q$ it is sometimes easier to show that $(\lnot q) \to (\lnot p)$ is True instead .

## Biconditional (If and only if)

The biconditional is a binary logical connective that is True if and only if both the propositional arguments have the same truth-value. Some of the symbols used to notate the biconditional are $p \leftrightarrow q$, $p \Leftrightarrow q$, $p \equiv q$, $p$ IFF $q$, and "$p$ if and only if $q$." Note that some of the symbols that notate the biconditional are the same as the symbols that notate the equivalence of propositional expressions. This is because the biconditional is the logical connective that checks for equality between the propositional arguments. Unlike implication, the biconditional is symmetric. That is, $p \leftrightarrow q \equiv q \leftrightarrow p.$

Another way of expressing the biconditional is using the conjunction of the conditional and its converse. That is,

$$
  p \leftrightarrow q \equiv (p \to q) \land (q \to p).
$$

We can prove this by combining the entries from the implication truth table and the conjunction truth table and by showing that the resulting column is the identical to the biconditional column.

### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expression $p \leftrightarrow q$ is given by:

| $p$ | $q$ | $p \leftrightarrow q$ |
|:---|:---|:---:|
| False | False | True |
| False | True | False |
| True | False | False |
| True | True | True |

### Examples

- $p=$"I am hungry."
$q=$"I eat cake."
$p \leftrightarrow q=$"I am hungry if and only if I eat cake."
$p \leftrightarrow q \equiv (p \to q) \land (q \to p) \equiv$"If I am hungry, then I eat cake, and if I eat cake, then I am hungry." (Note it is not possible to be hungry and not eat cake or to eat cake when I am not hungry).

## Operator Precedence

Now that we are familiar with a few of the important logical connectives, we can use them to build up complex propositional expressions with multiple connectives. An example of such an expression is:

$$
    p \to q \land r \lor s \leftrightarrow \lnot t
$$

 This can be rather confusing because we don't know the order in which to evaluate the connectives and propositions in this expression. Do we first evaluate $p \to q$ or $q \land r$? Selecting the correct order of evaluation is critical as a different order could change the truth-value of the final expression. For example, in the expression $p \to q \land r$ if $q \land r$ is evaluated first and $r$ is False, then

## Proof Techniques

Now that we understand what propositions are, and we are familiar with a few important logical connectives, we can begin to prove theorems. A theorem in mathematics is a proposition that we can show to be True based on other propositional axioms we assume. To prove a theorem we make deductive logical arguments beginning with the axioms and ending in a final expression that shows irrefutably that the theorem is True. Each step of the argument is expected to follow logically from last.

Technically, we have already introduced and proven theorems in the implication section when we showed that the converse, and inverse are not equivalent to the implication, and that the contrapositive is equivalent to the implication. We also sketched a proof showing that the biconditional is equivalent to the conjunction of the conditional and its converse. However, we will be more explicit about the assumptions and the logical steps in this proof.

## De Morgan's Laws

< theorem name="De Morgan's Theorem">
Let $p$, and $q$ be arbitrary propositions. Then 

$$
  \lnot{(p \land q)} \equiv (\lnot p) \lor (\lnot q).\\
  \lnot{(p \lor q)} \equiv (\lnot p) \land (\lnot q)
$$
</ theorem >

< proof >
Assuming that $p$ and $q$ are arbitrary propositions.
</ proof >