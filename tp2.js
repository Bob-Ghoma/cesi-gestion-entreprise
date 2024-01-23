// Classe Personne
class Personne {
    constructor(nom, prenom, adresse, telephone) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.telephone = telephone;
    }
}


class Salarie extends Personne {
    constructor(nom, prenom, adresse, telephone, matricule, departement, poste, salaire) {
        super(nom, prenom, adresse, telephone);
        this.matricule = matricule;
        this.departement = departement;
        this.poste = poste;
        this.salaire = salaire;
    }
}


class Client extends Personne {
    constructor(nom, prenom, adresse, telephone, numeroClient, historiqueAchats) {
        super(nom, prenom, adresse, telephone);
        this.numeroClient = numeroClient;
        this.historiqueAchats = historiqueAchats || [];
    }
}


class Fournisseur extends Personne {
    constructor(nom, prenom, adresse, telephone, numeroFournisseur, produitsFournis) {
        super(nom, prenom, adresse, telephone);
        this.numeroFournisseur = numeroFournisseur;
        this.produitsFournis = produitsFournis || [];
    }
}


class Produit {
    constructor(reference, nom, prix, fournisseur) {
        this.reference = reference;
        this.nom = nom;
        this.prix = prix;
        this.fournisseur = fournisseur;
    }
}


class Achat {
    constructor(numeroAchat, produitsAchetes, client, dateAchat) {
        this.numeroAchat = numeroAchat;
        this.produitsAchetes = produitsAchetes || [];
        this.client = client;
        this.dateAchat = dateAchat || new Date();
    }
}


class Entreprise {
    constructor(nom, siret, adresse) {
        this.nom = nom;
        this.siret = siret;
        this.adresse = adresse;
        this.salaries = [];
        this.clients = [];
        this.fournisseurs = [];
        this.produits = [];
        this.achats = [];
    }

    ajouterSalarie(salarie) {
        this.salaries.push(salarie);
    }

    ajouterClient(client) {
        this.clients.push(client);
    }

    ajouterFournisseur(fournisseur) {
        this.fournisseurs.push(fournisseur);
    }

    ajouterProduit(produit) {
        this.produits.push(produit);
    }

    effectuerAchat(achat) {
        // Gérer les exceptions ici, par exemple, vérifier si le numéro d'achat est unique, etc.
        this.achats.push(achat);
    }
}

// Interface IVendable
class IVendable {
    vendre() {
        throw new Error('La méthode vendre doit être implémentée par les classes qui implémentent cette interface.');
    }
}

// Utilisation des classes et des relations
const entrepriseXYZ = new Entreprise('XYZ Company', '123456789', '123 Main Street');

const fournisseurA = new Fournisseur('FournisseurA', 'John', 'Doe', '123 Supplier St', '555-1234', '001', ['ProduitA', 'ProduitB']);
const produitA = new Produit('001', 'ProduitA', 50, fournisseurA);

const clientX = new Client('ClientX', 'Jane', 'Doe', '456 Customer St', '555-5678', 'C001', []);
const achat1 = new Achat('A001', [produitA], clientX);

entrepriseXYZ.ajouterFournisseur(fournisseurA);
entrepriseXYZ.ajouterProduit(produitA);
entrepriseXYZ.ajouterClient(clientX);
entrepriseXYZ.effectuerAchat(achat1);

console.log(entrepriseXYZ);
