from flask.cli import FlaskGroup


from project import app, db
from project.models import Brands,Categories



cli = FlaskGroup(app)


@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command("add_to_db")
def add_to_db():
    db.session.add(Brands(BrandName="Electric Bazaar", BrandUrl="https://www.electric-bazaar.com/heritage"))
    db.session.add(Brands(BrandName="Nea", BrandUrl="https://n-e-a.co.uk/"))

    # add categories to category
    categories_values = ["Hijab", "Gharara", "Kimono", "Dress"]
    for category in categories_values:
        db.session.add(Categories(CategoryName=category))
    
    db.session.commit()

if __name__ == "__main__":
    cli()
