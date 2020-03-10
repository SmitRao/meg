from flask.cli import FlaskGroup


from project import app, db
from project.models import Brands



cli = FlaskGroup(app)


@cli.command("create_db")
def create_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

@cli.command("add_to_db")
def add_to_db():
    db.session.add(Brands(BrandName="Nea", BrandUrl="https://n-e-a.co.uk/"))
    db.session.commit()


if __name__ == "__main__":
    cli()
