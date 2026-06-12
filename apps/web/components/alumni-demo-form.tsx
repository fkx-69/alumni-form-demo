import type { ElementType, ReactNode, SelectHTMLAttributes } from "react"

import {
  Briefcase,
  ChevronDown,
  CircleDot,
  GraduationCap,
  IdCard,
  Send,
  User,
} from "lucide-react"

const filieresLicence = [
  "Selectionner",
  "MARKETING VENTES",
  "COMPTABILITE CONTROLE AUDIT",
  "GESTION",
  "DROIT",
  "INFORMATIQUE",
  "ECONOMIE",
]

function SectionCard({ children }: { children: ReactNode }) {
  const childArray = Array.isArray(children) ? children : [children]

  return (
    <div
      className="mb-6 overflow-hidden rounded-xl border border-border bg-card"
      style={{ borderWidth: "0.5px" }}
    >
      {childArray.map((child, index) => (
        <div key={index}>
          {index > 0 ? (
            <div
              className="border-border"
              style={{ borderTopWidth: "0.5px", borderTopStyle: "solid" }}
            />
          ) : null}
          {child}
        </div>
      ))}
    </div>
  )
}

function SectionHeader() {
  return (
    <div
      className="border-border bg-muted/40 px-6 py-5"
      style={{ borderBottomWidth: "0.5px", borderBottomStyle: "solid" }}
    >
      <p className="mb-0.5 flex items-center gap-2 text-[15px] font-medium text-foreground">
        <User className="size-[17px] text-primary" aria-hidden="true" />
        Vos informations
      </p>
      <p className="m-0 text-[13px] leading-relaxed text-muted-foreground">
        Ces donnees sont pre-remplies depuis votre fiche. Vous pouvez les
        corriger avant l&apos;envoi.
      </p>
    </div>
  )
}

function SubSection({ children }: { children: ReactNode }) {
  return <div className="px-6 py-5">{children}</div>
}

function SubSectionTitle({
  icon: Icon,
  title,
}: {
  icon: ElementType
  title: string
}) {
  return (
    <p className="mb-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-widest text-muted-foreground uppercase">
      <Icon className="size-3.5" aria-hidden="true" />
      {title}
    </p>
  )
}

function FieldsGrid({ children }: { children: ReactNode }) {
  return (
    <div
      className="grid gap-4"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
    >
      {children}
    </div>
  )
}

function FormField({
  label,
  required,
  fullWidth,
  children,
}: {
  label?: string
  required?: boolean
  fullWidth?: boolean
  children: ReactNode
}) {
  return (
    <div className={`flex flex-col gap-1.5${fullWidth ? "col-span-full" : ""}`}>
      {label ? (
        <span className="text-[13px] font-medium text-foreground">
          {label}
          {required ? <span className="ml-0.5 text-destructive">*</span> : null}
        </span>
      ) : null}
      {children}
    </div>
  )
}

const inputClass =
  "w-full box-border h-9 px-2.5 border border-input rounded-[calc(var(--radius)*0.8)] bg-background text-foreground text-sm font-sans outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/10 disabled:cursor-not-allowed disabled:opacity-50"

const selectClass = `${inputClass} appearance-none`

function NativeSelect({
  className = "",
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <div className="relative">
      <select className={`${selectClass} pr-8 ${className}`} {...props}>
        {children}
      </select>
      <ChevronDown
        className="pointer-events-none absolute top-1/2 right-2.5 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      />
    </div>
  )
}

function CheckboxRow({
  id,
  label,
  name,
}: {
  id: string
  label: string
  name: string
}) {
  return (
    <div className="flex items-center gap-2.5 py-2">
      <input
        type="checkbox"
        id={id}
        name={name}
        className="size-[18px] shrink-0 cursor-pointer rounded accent-primary disabled:cursor-not-allowed disabled:opacity-50"
      />
      <label
        htmlFor={id}
        className="cursor-pointer text-sm text-foreground select-none"
      >
        {label}
      </label>
    </div>
  )
}

export function AlumniDemoForm() {
  return (
    <div className="min-h-svh bg-muted/30">
      <main className="mx-auto max-w-[680px] px-4 py-8">
        <form action="/api/alumni-demo" method="post" noValidate>
          <div className="mb-6">
            <h1 className="text-[22px] font-medium text-foreground">
              Mise a jour des informations alumni
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Formulaire statique envoye avec un lien unique pour verifier et
              mettre a jour les informations du profil alumni.
            </p>
          </div>

          <SectionCard>
            <SectionHeader />

            <SubSection>
              <SubSectionTitle icon={IdCard} title="Identite et contact" />
              <FieldsGrid>
                <FormField label="Prenom" required>
                  <input
                    id="profile-prenom"
                    name="prenom"
                    className={inputClass}
                    defaultValue="John"
                  />
                </FormField>

                <FormField label="Nom" required>
                  <input
                    id="profile-nom"
                    name="nom"
                    className={inputClass}
                    defaultValue="Doe"
                  />
                </FormField>

                <FormField label="Email" required>
                  <input
                    id="profile-email"
                    name="email"
                    type="email"
                    className={inputClass}
                    defaultValue="JohnDoe@gmail.com"
                  />
                </FormField>

                <FormField label="Telephone" required>
                  <div className="grid grid-cols-[minmax(6.5rem,7.25rem)_minmax(0,1fr)] gap-2">
                    <NativeSelect
                      id="profile-telephone-indicatif"
                      name="indicatif_telephone"
                      aria-label="Indicatif telephonique"
                    >
                      <option value="ML">ML +223</option>
                    </NativeSelect>
                    <input
                      id="profile-telephone"
                      name="telephone"
                      type="tel"
                      placeholder="70 00 00 00"
                      className={`${inputClass} min-w-0`}
                      defaultValue="70000000"
                    />
                  </div>
                </FormField>
              </FieldsGrid>
            </SubSection>

            <SubSection>
              <SubSectionTitle icon={GraduationCap} title="Formation" />
              <FieldsGrid>
                <FormField label="Niveau de diplome" required>
                  <NativeSelect
                    id="profile-niveau"
                    name="niveau_diplome_obtenu"
                    defaultValue="LICENCE"
                  >
                    <option value="LICENCE">Licence</option>
                    <option value="MASTER">Master</option>
                    <option value="PREPA">Prepa</option>
                    <option value="AUTRE">Autre</option>
                  </NativeSelect>
                </FormField>

                <FormField label="Annee d'obtention">
                  <NativeSelect
                    id="profile-annee"
                    name="annee_obtention_diplome"
                    defaultValue="2024"
                  >
                    <option value="">Selectionner</option>
                    <option value="2026">2026</option>
                    <option value="2025">2025</option>
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                  </NativeSelect>
                </FormField>

                <FormField label="Filiere Licence">
                  <NativeSelect
                    id="profile-filiere"
                    name="filiere_licence"
                    defaultValue="MARKETING VENTES"
                  >
                    {filieresLicence.map((filiere) => (
                      <option
                        key={filiere}
                        value={filiere === "Selectionner" ? "" : filiere}
                      >
                        {filiere}
                      </option>
                    ))}
                  </NativeSelect>
                </FormField>

                <div className="col-span-full">
                  <CheckboxRow
                    id="profile-poursuite"
                    name="poursuite_etudes_apres_licence"
                    label="Poursuite d'etudes apres la licence"
                  />
                </div>
              </FieldsGrid>
            </SubSection>

            <SubSection>
              <SubSectionTitle
                icon={Briefcase}
                title="Situation professionnelle"
              />
              <FieldsGrid>
                <FormField label="Statut actuel">
                  <NativeSelect
                    id="profile-statut"
                    name="statut_professionnel"
                    defaultValue=""
                  >
                    <option value="">Selectionner</option>
                    <option value="STAGIAIRE">Stagiaire</option>
                    <option value="EMPLOYE">Employe</option>
                    <option value="INDEPENDANT">Independant</option>
                    <option value="EN_RECHERCHE">En recherche</option>
                    <option value="POURSUITE_ETUDES">
                      Poursuite d&apos;etudes
                    </option>
                    <option value="INACTIF">Sans activite</option>
                    <option value="AUTRE">Autre</option>
                  </NativeSelect>
                </FormField>
              </FieldsGrid>
            </SubSection>
          </SectionCard>

          <div className="mb-6 flex items-center gap-2">
            <CircleDot className="size-3.5 flex-shrink-0 text-muted-foreground" />
            <span className="text-[12px] text-muted-foreground">
              Les champs marqu&eacute;s{" "}
              <span className="font-medium text-destructive">*</span> sont
              obligatoires
            </span>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex h-10 items-center gap-2 rounded-[calc(var(--radius)*0.8)] border-none bg-primary px-6 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="size-4" aria-hidden="true" />
              Soumettre mes r&eacute;ponses
            </button>
          </div>
        </form>
      </main>
      <footer className="pb-8 text-center">
        <p className="text-xs text-muted-foreground">
          <span aria-hidden="true">&copy;</span> 2026 ITMA &mdash; Tous droits
          r&eacute;serv&eacute;s
        </p>
      </footer>
    </div>
  )
}
