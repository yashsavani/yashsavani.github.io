---
title: "Propositional Logic"
date: 2021-06-14T10:49:46+05:30
draft: true
---

## Introduction

This post is about one of the most foundational of all mathematical concepts: logic. I like to think of mathematics as an description of the abstractions and patterns we experience throughout our lives explained through deductive arguments built upon irrefutable axioms. Both the arguments and the axioms are expressed in the language of logic. So understanding logic is the foundation for understanding mathematics. As Galileo Galilei claimed, "mathematics is the language with which God has written the universe." Logic is the language of mathematics. Therefore, learning logic is the first step on the path to understanding the universe. For those of you with more utilitarian objectives, we can take this a step further. Before we can modify the world to fit our desires, we need to understand the rules of modification. Mathematics, and therefore logic, is the language used to express these rules. So learning logic is the first step on the path to innovation and creation as well.

## History and Scope

Logic has had a long and illustrious history. It was first developed by Aristotle under the moniker "analytics". It was further refined over the centuries until it took on its modern form in the 20th century under the work of several western scholars including Gottlob Frege, Charles Babbage, Augustus De Morgan, and George Bool. Many prolific logicians have dedicated their entire lives to the study of logic and its relation to mathematics. A few examples of these logicians are: Bertrand Russell, Alfred North Whitehead, Kurt Friedrich Gödel, and Georg Cantor. In this post I am going to avoid going too far down the logic rabbit hole. Instead, I will focus on laying out the foundations necessary to have a competency and fluency required by applied mathematics. If you find your interest piqued and want to dive deeper into the enchanting world of logic, I have provided some links at the end of this post that should help begin your journey.

There are many forms of logic out there. The simplest and most foundational of them all is propositional logic, or zeroth order logic. In this post we are going to explore this form of logic as it is the foundation upon which all the other higher-order forms of logic are built.

## Propositions

To begin our study of logic we need to introduce two key concepts: propositions and connectives. Logic is composed of declarative statements that must take on a unique truth value. That is, the statements must be either True or False, but not both. These statements are called propositions. We usually use propositional variables ($p, q,$ or $r$) to stand in as replacements for these propositions when we are making deductions about them. Some examples of propositions are:

- All men are mortal.
- Socrates is a man.
- $2 + 2 = 4.$
- $2 + 2 = 5.$ (Even though this statement is false, it is still a valid proposition).
- The sun will rise tomorrow.
- God exists. (Even if we do not know the truth value of the statement, the fact that it can have a unique truth value is sufficient for it to qualify as a proposition).
- $x + 4 = 5.$ (Even though we do not know what the value for $x$ is, this is still a valid proposition since it can take on a unique truth value for a given $x$).

Some non-examples of propositions are:

- Where are you going? (Interrogative statements are not propositions).
- Watch out! (Exclamatory statements are not propositions)
- Jump up and down. (Imperative sentences are not propositions)
- This statement is False. (This one is a little tricky, but it is not a proposition because it cannot take on a unique truth value. If it is true, then it is false, and if it is false, then it is true. We call such statements paradoxical statements).

## Logical Connectives

If logic was only comprised of propositions we wouldn't be able to do much with it. Logical connectives are the gears and glue that allow us to combine and modify potentially many propositions into a single propositional statement that takes on a unique truth value. Common examples of logical connectives are conjunction, disjunction, negation, and implication. We will encounter these and more later on in the post.

When we combine or modify potentially multiple propositions with logical connectives, we get a new combined or modified statement that takes on a unique truth value. We call this statement a propositional expression.

## Arity

The arity of a logical connective is the number of propositions the connective combines or modifies. We call connectives that modify a single proposition unary connectives, connectives that combine two propositions binary connectives, connectives that combine three propositions ternary connectives, and so on. Beyond three, we usually call propositions that modify $n$ propositions, where $n > 3$, an $n$-ary connective.

## Truth Tables

If we enumerate all the possible truth values that $n$ propositions can take simultaneously, we find that there are $2^n$ possibilities, or states. We can list all these states in a table, where each row corresponds to a specific state. Such a table is called a truth table. We use truth tables to exhaustively delineate every possible truth value a propositional expression could take for any input state.

Two propositional expressions are considered equivalent if the truth tables describing both the expressions are the same. To express when two propositional statements are equivalent, we use the symbols $\equiv$, $\Leftrightarrow$, iff, and "if and only if."

We will now introduce some of the most common and important logical connectives used in mathematics.

## Negation (NOT)

Negation is a unary logical connective that simply reverses the truth value of a proposition. That is, if the proposition is True, the negation of the proposition is False, and if the proposition is False, the negation of the proposition is True. Some of the symbols used to notate negation are $\lnot p$, NOT $p$, $\sim p$, and $\bar p$, where $p$ is an arbitrary proposition.

### Formally

Let $p$ be an arbitrary proposition. Then $\lnot p$ is defined as 

$$
    \lnot p = \begin{cases}\text{True,} &\quad\text{if }p\text{ is False} \\ \text{False,} &\quad\text{if }p\text{ is True}\end{cases}.
$$

The truth table expressing the operation of the negation connective on an arbitrary proposition $p$ is:

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

Identity is a unary logical connective that does nothing to change or modify the proposition. That is, if the proposition is True, the identity of the proposition is True, and if the proposition is False, the identity of the proposition is also False. Some of the symbols used to notate identity are $\text{id }p$, and $(p)$, where $p$ is an arbitrary proposition. While this does seem like a rather useless connective, it comes in handy when organizing propositional expressions with multiple connectives. It is used to disambiguate the precedence or order in which the connectives are to be applied.

## Conjunction (AND)

Conjunction is a binary logical connective that results in an expression that is True if and only if both propositional arguments are also True. Some of the symbols used to notate conjunction are $p \land q$, and $p$ AND $q$, where $p$ and $q$ are arbitrary propositions.

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

Inclusive disjunction is a binary logical connective that results in an expression that is True if any of the propositional arguments are True. If both propositional arguments are False, then the resulting propositional expression is also False. Some of the symbols used to notate inclusive disjunction are $p \lor q$, and $p$ OR $q$, where $p$ and $q$ are arbitrary propositions.

Note that often in English the inclusivity of the disjunction is usually implied from context. That is, the statement "You can have the brownie, or you can have the cake" usually implies that that you cannot have both the brownie and the cake. Therefore, the or in this statement does not correspond to the inclusive disjunction (It corresponds to the exclusive disjunction described below). On the other hand, the statement "To get exercise, you can do cardio or you can lift weights" implies that you can get exercise by doing either cardio, or by lifting weights, or by doing both. In this case, the or in the statement does correspond to the inclusive disjunction.

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

Implication is one of the most common and intuitive ways to model cause and effect. The cause is usually represented by the antecedent, and the effect is represented by the consequent. However, note that the expression $p \to q$ is apathetic to the truth value of the consequent if the antecedent evaluates to False. That is, the cause for the effect is not necessarily unique. As an example, let $p =$"I am hungry" and $q = $"I eat cake." Then $p \to q$ corresponds to "If I am hungry, then I eat cake." $p \to q$ is still True even when "I am not hungry, and I eat cake" because $p \to q$ does not tell us anything about the case where "I am not hungry."

### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expression $p \to q$, $q \to p$,  $(\lnot p) \to (\lnot q)$, and $(\lnot q) \to (\lnot p)$ is given by:

| $p$ | $q$ | $p \to q$ | $q \to p$ | $(\lnot p) \to (\lnot q)$ | $(\lnot q) \to (\lnot p)$ |
|:---|:---|:---:|:---:|:---:|:---:|
| False | False | True | True | True | True |
| False | True | True | False | False | True |
| True | False | False | True | True | False |
| True | True | True | True | True | True |

### Inverse, Converse, and Contrapositive

If we examine the truth table of the implication connective, we see that it is not **symmetric**. That is, we cannot swap the role of the antecedent and the consequent.

$$
  p \to q \not \equiv q \to p.
$$

We refer to $q \to p$ as the converse of $p \to q$. It is a common logical fallacy to assume that implication and its converse are equivalent and is the basis for several mathematical proof errors.

Furthermore, again by examining the truth table we can deduce that negating the propositional arguments of the implication is not equivalent to the implication itself.

$$
    p \to q \not \equiv (\lnot p) \to (\lnot q)
$$

We refer to $(\lnot p) \to (\lnot q)$ as the inverse of $p \to q$.

However, the truth table columns for $p \to q$ and $(\lnot q) \to (\lnot p)$ are the same.

$$
    p \to q \equiv (\lnot q) \to (\lnot p)
$$

We refer to $(\lnot q) \to (\lnot p)$ as the contrapositive of $p \to q$. Often when we are  trying to show that $p \to q$ it is sometimes easier to show instead that $(\lnot q) \to (\lnot p)$ is True.

## Biconditional (If and only if)

The biconditional is a binary logical connective that is True if and only if both the propositional arguments have the same truth value. Some of the symbols used to notate the biconditional are $p \leftrightarrow q$, $p \Leftrightarrow q$, $p \equiv q$, $p$ IFF $q$, and "$p$ if and only if $q$." Note that some of the symbols that notate the biconditional are the same as the symbols that notate the equivalence of propositional expressions. This is because the biconditional is the logical connective that checks for equality between the propositional arguments. Unlike implication, the biconditional is symmetric. That is, $p \leftrightarrow q \equiv q \leftrightarrow p.$

Another way of expressing the biconditional is using the conjunction of the conditional and 
its converse. That is,

$$
  p \leftrightarrow q \equiv (p \to q) \land (q \to p).
$$

We can prove this by combining the entries from the implication truth table and the conjunction truth table and showing that the resulting column is the same as the biconditional column.

### Formally

Let $p$ and $q$ be arbitrary propositions. Then the truth table for the expression $p \to q$ is given by:

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

 This can be rather confusing, because we don't know how to evaluate such an expression. Do we first evaluate $p \to q$ or $q \land r$? Selecting which one to evaluate first is critical as the order of evaluation could change the truth value of the final expression. For example in the expression $p \to q \land r$ if $q \land r$ is evaluated first and $r$ is False, then

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